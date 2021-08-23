package com.swisscom.featuretoggles.controllers;

import com.swisscom.featuretoggles.dto.FeatureToggleDTO;
import com.swisscom.featuretoggles.services.FeatureToggleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("v1/api/")
public class FeatureToggleController {
    @Autowired
    private FeatureToggleService featureToggleService;

    @PostMapping("feature-toggle")
    public FeatureToggleDTO add(@RequestBody FeatureToggleDTO featureToggleDTO) throws Exception {
        return featureToggleService.add(featureToggleDTO);
    }

    @PutMapping("feature-toggle")
    public FeatureToggleDTO update(@RequestBody FeatureToggleDTO featureToggleDTO) {
        return featureToggleService.update(featureToggleDTO);
    }

    @DeleteMapping("feature-toggle/{customerToggleId}")
    public void delete(@PathVariable Long customerToggleId) {

    }

    @GetMapping("feature-toggle")
    public List<FeatureToggleDTO> findAll() {
        return featureToggleService.findAllActive();
    }
}
