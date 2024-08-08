package fullstackapp.Employee.Management.System;	

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "fullstack.Employee.Management.System")
@EntityScan(basePackages = "fullstack.Employee.Management.System.Entity")
@EnableJpaRepositories(basePackages = "fullstack.Employee.Management.System.Repository")
public class EmployeeManagementSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmployeeManagementSystemApplication.class, args);
    }
}
