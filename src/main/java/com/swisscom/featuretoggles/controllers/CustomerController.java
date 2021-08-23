package com.swisscom.featuretoggles.controllers;

import com.swisscom.featuretoggles.dto.CustomerDTO;
import com.swisscom.featuretoggles.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("v1/api/")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("customer")
    public CustomerDTO add(@RequestBody CustomerDTO featureToggleDTO) throws Exception {
        return customerService.add(featureToggleDTO);
    }

    @PutMapping("customer")
    public CustomerDTO update(@RequestBody CustomerDTO featureToggleDTO) {
        return customerService.update(featureToggleDTO);
    }

    @DeleteMapping("customer/{customerId}")
    public void delete(@PathVariable Long customerId) {
        this.customerService.delete(customerId);

    }

    @GetMapping("customer")
    public List<CustomerDTO> findAll() {
        return customerService.findAllActive();
    }
}
