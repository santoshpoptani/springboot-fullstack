package com.example.deployamigoescode.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.CorsRegistration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class ConfingWebMVC implements WebMvcConfigurer {


    @Value("#{'${cors.allowed-origins}'.split(',')}")
    private List<String> allowedOrigins;

    @Value("#{'${cors.allowed-methods}'.split(',')}")
    private List<String> allowedMethods;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        CorsRegistration corsRegistration = registry.addMapping("/**");
        allowedOrigins.forEach(corsRegistration::allowedOrigins);
        allowedMethods.forEach(corsRegistration::allowedMethods);
}
}