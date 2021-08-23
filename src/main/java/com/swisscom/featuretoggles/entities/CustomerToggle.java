package com.swisscom.featuretoggles.entities;

import com.swisscom.featuretoggles.entities.audit.AuditInfo;

import javax.persistence.*;

@Entity(name = "customer_toggle")
public class CustomerToggle extends AuditInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Long featureToggleId;

    @Column
    private Long customerId;

    @Column
    private Long expiresOn;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getExpiresOn() {
        return expiresOn;
    }

    public void setExpiresOn(Long expiresOn) {
        this.expiresOn = expiresOn;
    }

    public Long getFeatureToggleId() {
        return featureToggleId;
    }

    public void setFeatureToggleId(Long featureToggleId) {
        this.featureToggleId = featureToggleId;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }
}
