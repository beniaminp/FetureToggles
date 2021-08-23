package com.swisscom.featuretoggles.controllers;

import com.swisscom.featuretoggles.dto.CustomerFeatureToggleDTO;
import com.swisscom.featuretoggles.dto.CustomerToggleDTO;
import com.swisscom.featuretoggles.dto.customer_tree.CustomerFeaturesTree;
import com.swisscom.featuretoggles.entities.CustomerToggle;
import com.swisscom.featuretoggles.services.CustomerFeatureToggleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("v1/api/")
public class CustomerFeatureToggleController {
    @Autowired
    private CustomerFeatureToggleService customerFeatureToggleService;

    @PostMapping("customer-feature")
    public void add(@RequestBody CustomerFeatureToggleDTO customerFeatureToggleDTO) throws Exception {
        customerFeatureToggleService.add(customerFeatureToggleDTO);
    }

    @PutMapping("customer-feature")
    public void update(@RequestBody CustomerFeatureToggleDTO customerFeatureToggleDTO) {
        customerFeatureToggleService.updateCustomerFeature(customerFeatureToggleDTO);
    }

    @DeleteMapping("customer-feature/{customerFeatureToggleId}")
    public void delete(@PathVariable Long customerFeatureToggleId) {
        this.customerFeatureToggleService.delete(customerFeatureToggleId);
    }

    @GetMapping("customer-feature")
    public List<CustomerFeaturesTree> findAll() {
        return customerFeatureToggleService.findCustomersTree();
    }

    @GetMapping("customer-feature/findById/{customerToggleId}")
    public CustomerToggleDTO findCustomerFeature(@PathVariable Long customerToggleId) {
        return customerFeatureToggleService.findById(customerToggleId);
    }
}
