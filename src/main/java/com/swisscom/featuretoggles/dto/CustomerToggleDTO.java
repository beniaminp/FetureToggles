package com.swisscom.featuretoggles.dto;

import com.swisscom.featuretoggles.entities.Customer;
import com.swisscom.featuretoggles.entities.FeatureToggle;

public class CustomerToggleDTO {
    public Long id;
    public FeatureToggle featureToggle;
    public Customer customer;
    public Long expiresOn;
}
