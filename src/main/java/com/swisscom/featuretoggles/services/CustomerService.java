package com.swisscom.featuretoggles.services;

import com.swisscom.featuretoggles.dto.CustomerDTO;
import com.swisscom.featuretoggles.dto_utils.DtoUtils;
import com.swisscom.featuretoggles.entities.Customer;
import com.swisscom.featuretoggles.repositories.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepo customerRepo;

    public List<CustomerDTO> findAllActive() {
        List<CustomerDTO> customerDTOS = new LinkedList<>();
        customerRepo.findAllByActiveIsTrue().forEach(customer -> {
            customerDTOS.add(DtoUtils.copyProperties(customer, CustomerDTO.class));
        });
        return customerDTOS;
    }

    public CustomerDTO update(CustomerDTO customerDTO) {
        Customer customer = DtoUtils.copyProperties(customerDTO, Customer.class);
        customer = customerRepo.save(customer);
        return DtoUtils.copyProperties(customer, CustomerDTO.class);
    }

    @Transactional(rollbackFor = RuntimeException.class)
    public CustomerDTO add(CustomerDTO customerDTO) throws Exception {
        Customer customer = DtoUtils.copyProperties(customerDTO, Customer.class);
        customer = customerRepo.save(customer);
        return DtoUtils.copyProperties(customer, CustomerDTO.class);
    }

    public void delete(Long customerId) {
        customerRepo.deleteById(customerId);
    }
}
