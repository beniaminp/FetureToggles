package com.swisscom.featuretoggles.services;

import com.swisscom.featuretoggles.dto.FeatureToggleDTO;
import com.swisscom.featuretoggles.dto_utils.DtoUtils;
import com.swisscom.featuretoggles.entities.FeatureToggle;
import com.swisscom.featuretoggles.repositories.FeatureToggleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;

@Service
public class FeatureToggleService {
    @Autowired
    private FeatureToggleRepo featureToggleRepo;

    public List<FeatureToggleDTO> findAllActive() {
        List<FeatureToggleDTO> allFeatureToggles = new LinkedList<>();
        featureToggleRepo.findAllByActiveIsTrue().forEach(featureToggle -> {
            allFeatureToggles.add(DtoUtils.copyProperties(featureToggle, FeatureToggleDTO.class));
        });
        return allFeatureToggles;
    }

    public FeatureToggleDTO update(FeatureToggleDTO featureToggleDTO) {
        FeatureToggle featureToggle = DtoUtils.copyProperties(featureToggleDTO, FeatureToggle.class);
        featureToggle = featureToggleRepo.save(featureToggle);
        return DtoUtils.copyProperties(featureToggle, FeatureToggleDTO.class);
    }

    @Transactional(rollbackFor = RuntimeException.class)
    public FeatureToggleDTO add(FeatureToggleDTO featureToggleDTO) throws Exception {
        FeatureToggle featureToggle = DtoUtils.copyProperties(featureToggleDTO, FeatureToggle.class);
        featureToggle = featureToggleRepo.save(featureToggle);
        return DtoUtils.copyProperties(featureToggle, FeatureToggleDTO.class);
    }

    public List<FeatureToggle> findAllByDispalyNameIn(List<String> displayNames){
        return featureToggleRepo.findAllByDisplayNameIn(displayNames);
    }

    public void delete(Long customerFeatureId) {
        featureToggleRepo.deleteById(customerFeatureId);
    }
}
