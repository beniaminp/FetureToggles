package com.swisscom.featuretoggles.dto.api_dto.request;

import org.springframework.lang.NonNull;

import java.util.List;

public class FeatureRequest {
    @NonNull
    public Long customerId;
    public List<FeaturesDTO> features;

    @NonNull
    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(@NonNull Long customerId) {
        this.customerId = customerId;
    }

    public List<FeaturesDTO> getFeatures() {
        return features;
    }

    public void setFeatures(List<FeaturesDTO> features) {
        this.features = features;
    }
}
