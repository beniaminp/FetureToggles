package com.swisscom.featuretoggles.services;

import com.swisscom.featuretoggles.dto.CustomerFeatureToggleDTO;
import com.swisscom.featuretoggles.dto.CustomerToggleDTO;
import com.swisscom.featuretoggles.dto.customer_tree.CustomerFeaturesTree;
import com.swisscom.featuretoggles.dto.customer_tree.FeatureLeaf;
import com.swisscom.featuretoggles.entities.Customer;
import com.swisscom.featuretoggles.entities.CustomerToggle;
import com.swisscom.featuretoggles.entities.FeatureToggle;
import com.swisscom.featuretoggles.repositories.CustomerRepo;
import com.swisscom.featuretoggles.repositories.CustomerToggleRepo;
import com.swisscom.featuretoggles.repositories.FeatureToggleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static java.util.stream.Collectors.groupingBy;
import static java.util.stream.Collectors.toList;

@Service
public class CustomerFeatureToggleService {

    @Autowired
    private CustomerToggleRepo customerToggleRepo;

    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private FeatureToggleRepo featureToggleRepo;

    public List<CustomerFeaturesTree> findCustomersTree() {

        List<CustomerFeaturesTree> tree = new LinkedList<>();
        List<CustomerToggle> allCustomerToggle = customerToggleRepo.findAllByActiveIsTrue();
        List<Customer> allCustomers = customerRepo.findAllByActiveIsTrue();
        List<FeatureToggle> allFeatureToggles = featureToggleRepo.findAllByActiveIsTrue();

        Map<Long, List<CustomerToggle>> customerFeatureMap = allCustomerToggle.stream().collect(groupingBy(CustomerToggle::getCustomerId));
        customerFeatureMap.keySet().forEach(customerId -> {
            CustomerFeaturesTree customerFeaturesTree = new CustomerFeaturesTree();
            Customer customer = allCustomers.stream().filter(customer1 -> customer1.getId().equals(customerId)).collect(toList()).get(0);
            customerFeaturesTree.id = customer.getId();
            customerFeaturesTree.name = customer.getName();

            customerFeaturesTree.featureLeafList = customerFeatureMap.get(customerId).stream().map(customerToggle -> {
                FeatureToggle featureToggle = allFeatureToggles
                        .stream()
                        .filter(featureToggle1 -> featureToggle1.getId().equals(customerToggle.getFeatureToggleId()))
                        .collect(toList()).get(0);
                FeatureLeaf featureLeaf = new FeatureLeaf();
                featureLeaf.id = customerToggle.getId();
                featureLeaf.name = featureToggle.getDisplayName();
                featureLeaf.expiresOn = customerToggle.getExpiresOn();
                return featureLeaf;
            }).collect(toList());
            tree.add(customerFeaturesTree);
        });
        return tree;
    }

    public void updateCustomerFeature(CustomerFeatureToggleDTO customerFeatureToggleDTO) {
        customerToggleRepo.findById(customerFeatureToggleDTO.customerFeatureToggleId).ifPresent(customerToggle -> {
            customerToggle.setExpiresOn(customerFeatureToggleDTO.expiresOn);
            customerToggleRepo.save(customerToggle);
        });
    }

    public void add(CustomerFeatureToggleDTO customerFeatureToggleDTO) {
        CustomerToggle customerToggle = new CustomerToggle();

        customerToggle.setExpiresOn(customerFeatureToggleDTO.expiresOn);
        customerToggle.setCustomerId(customerFeatureToggleDTO.customerId);
        customerToggle.setFeatureToggleId(customerFeatureToggleDTO.featureToggleId);
        customerToggle.setActive(true);

        customerToggleRepo.save(customerToggle);
    }

    public void delete(Long customerFeatureToggleId) {
        Optional<CustomerToggle> customerToggle = customerToggleRepo.findById(customerFeatureToggleId);
        customerToggle.ifPresent(customerToggle1 -> {
            customerToggle1.setActive(false);
            customerToggleRepo.save(customerToggle1);
        });
    }

    public List<CustomerToggle> findAllByCustomerId(Long customerId) {
        return customerToggleRepo.findAllByCustomerId(customerId);
    }

    public CustomerToggleDTO findById(Long customerToggleId) {
        CustomerToggle customerToggle = customerToggleRepo.findById(customerToggleId).orElseThrow();
        CustomerToggleDTO customerToggleDTO = new CustomerToggleDTO();
        customerToggleDTO.id = customerToggle.getId();
        customerToggleDTO.expiresOn = customerToggle.getExpiresOn();
        customerToggleDTO.customer = customerRepo.findById(customerToggle.getCustomerId()).orElseThrow();
        customerToggleDTO.featureToggle = featureToggleRepo.findById(customerToggle.getFeatureToggleId()).orElseThrow();
        return customerToggleDTO;
    }
}
