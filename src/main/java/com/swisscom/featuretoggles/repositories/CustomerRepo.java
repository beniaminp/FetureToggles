package com.swisscom.featuretoggles.repositories;

import com.swisscom.featuretoggles.entities.Customer;
import com.swisscom.featuretoggles.entities.FeatureToggle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, Long> {
    List<Customer> findAllByActiveIsTrue();
}
