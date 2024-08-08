package fullstack.Employee.Management.System.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import fullstack.Employee.Management.System.Entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> 
{
	
}
