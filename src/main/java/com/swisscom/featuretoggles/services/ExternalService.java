package com.swisscom.featuretoggles.services;

import com.swisscom.featuretoggles.dto.api_dto.request.FeatureRequest;
import com.swisscom.featuretoggles.dto.api_dto.request.FeaturesDTO;
import com.swisscom.featuretoggles.dto.api_dto.response.FeatureToggleResponse;
import com.swisscom.featuretoggles.entities.CustomerToggle;
import com.swisscom.featuretoggles.entities.FeatureToggle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.groupingBy;

@Service
public class ExternalService {
    @Autowired
    private CustomerFeatureToggleService customerFeatureToggleService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private FeatureToggleService featureToggleService;

    public List<FeatureToggleResponse> findAll(FeatureRequest featureRequest) {
        List<FeatureToggleResponse> featureToggleResponses = new ArrayList<>();

        Map<Long, List<CustomerToggle>> customerToggleMap = findAllTogglesForCustomer(featureRequest);
        List<FeatureToggle> requestedFeatureToggles = findRequestedToggles(featureRequest);

        requestedFeatureToggles.forEach(featureToggle -> {

            FeatureToggleResponse featureToggleResponse = new FeatureToggleResponse();
            featureToggleResponse.name = featureToggle.getDisplayName();
            featureToggleResponse.inverted = featureToggle.getInverted();

            List<CustomerToggle> customerToggle = customerToggleMap.get(featureToggle.getId());

            if (customerToggle != null
                    && customerToggle.size() > 0) {
                featureToggleResponse.active = featureToggle.getActive();
                featureToggleResponse.expired = customerToggle.get(0).getExpiresOn() < System.currentTimeMillis();
            } else {
                featureToggleResponse.active = false;
                featureToggleResponse.expired = true;
            }
            featureToggleResponses.add(featureToggleResponse);
        });

        List<FeaturesDTO> notExistentFutures = findNonExistingFeatures(featureRequest, featureToggleResponses);

        notExistentFutures.forEach(featuresDTO -> {
            FeatureToggleResponse featureToggleResponse = new FeatureToggleResponse();
            featureToggleResponse.name = featuresDTO.name;
            featureToggleResponse.inverted = false;
            featureToggleResponse.active = false;
            featureToggleResponse.expired = false;
            featureToggleResponses.add(featureToggleResponse);
        });
        return featureToggleResponses;
    }

    private List<FeaturesDTO> findNonExistingFeatures(FeatureRequest featureRequest, List<FeatureToggleResponse> featureToggleResponses) {
        return featureRequest.features.stream()
                .filter(featuresDTO -> featureToggleResponses.stream()
                        .anyMatch(featureToggleResponse ->
                                featuresDTO.getName().equals(featureToggleResponse.name)))
                .collect(Collectors.toList());
    }

    private Map<Long, List<CustomerToggle>> findAllTogglesForCustomer(FeatureRequest featureRequest) {
        return customerFeatureToggleService
                .findAllByCustomerId(featureRequest.customerId)
                .stream().collect(groupingBy(CustomerToggle::getFeatureToggleId));
    }

    private List<FeatureToggle> findRequestedToggles(FeatureRequest featureRequest) {
        return featureToggleService
                .findAllByDispalyNameIn(
                        featureRequest
                                .features
                                .stream()
                                .map(FeaturesDTO::getName)
                                .collect(Collectors.toList()));
    }
}
