package com.example.deployamigoescode;

import com.example.deployamigoescode.entity.StudentEnity;
import com.example.deployamigoescode.repository.StudentRepository;
import net.datafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DeployAmigoescodeApplication {

    public static void main(String[] args) {
        SpringApplication.run(DeployAmigoescodeApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(StudentRepository studentRepository){
        return args -> {
            Faker faker = new Faker();
            String name = faker.name().fullName();
            int age = faker.number().numberBetween(20, 50);
            Gender gender = age % 2 == 0 ? Gender.MALE : Gender.FEMALE;
            StudentEnity enity = new StudentEnity(name,age,gender);
           // studentRepository.save(enity);



        };
    }

}
