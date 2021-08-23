package com.swisscom.featuretoggles.controllers;

import com.swisscom.featuretoggles.dto.api_dto.request.FeatureRequest;
import com.swisscom.featuretoggles.dto.api_dto.response.FeatureToggleResponse;
import com.swisscom.featuretoggles.services.ExternalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("v1/api/")
public class ExternalRestApi {
    @Autowired
    private ExternalService externalService;

    @PostMapping("features")
    public List<FeatureToggleResponse> findAll(@RequestBody FeatureRequest featureRequest) {
        return externalService.findAll(featureRequest);
    }
}
