package com.swisscom.featuretoggles.repositories;

import com.swisscom.featuretoggles.entities.FeatureToggle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeatureToggleRepo extends JpaRepository<FeatureToggle, Long> {
    List<FeatureToggle> findAllByActiveIsTrue();

    List<FeatureToggle> findAllByDisplayNameIn(List<String> displayNames);
}
