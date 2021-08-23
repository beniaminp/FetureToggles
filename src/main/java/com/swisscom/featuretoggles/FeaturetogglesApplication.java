package com.swisscom.featuretoggles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class FeaturetogglesApplication {

	public static void main(String[] args) {
		SpringApplication.run(FeaturetogglesApplication.class, args);
	}

}
