package com.swisscom.featuretoggles.entities;

import com.swisscom.featuretoggles.entities.audit.AuditInfo;

import javax.persistence.*;

@Entity(name = "feature_toggle")
public class FeatureToggle extends AuditInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String displayName;

    @Column
    private String technicalName;

    @Column
    private Long expiresOn;

    @Column
    private String description;

    @Column
    private Boolean inverted;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getTechnicalName() {
        return technicalName;
    }

    public void setTechnicalName(String technicalName) {
        this.technicalName = technicalName;
    }

    public Long getExpiresOn() {
        return expiresOn;
    }

    public void setExpiresOn(Long expiresOn) {
        this.expiresOn = expiresOn;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getInverted() {
        return inverted;
    }

    public void setInverted(Boolean inverted) {
        this.inverted = inverted;
    }
}
