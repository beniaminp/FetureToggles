package com.swisscom.featuretoggles.repositories;

import com.swisscom.featuretoggles.entities.CustomerToggle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerToggleRepo extends JpaRepository<CustomerToggle, Long> {
    List<CustomerToggle> findAllByActiveIsTrue();

    List<CustomerToggle> findAllByCustomerId(Long customerId);
}
