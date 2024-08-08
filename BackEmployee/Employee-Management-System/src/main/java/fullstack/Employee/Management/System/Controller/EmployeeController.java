package fullstack.Employee.Management.System.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fullstack.Employee.Management.System.Entity.Employee;
import fullstack.Employee.Management.System.Repository.EmployeeRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}	
	
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	@GetMapping("/employees/{id}")
	public Employee getEmployeeById(@PathVariable(value = "id") Integer employeeId) {
        return employeeRepository.findById(employeeId)
                .orElseThrow();
    }	
	
	@PutMapping("/employees/{id}")
	public Employee updateEmployee(@PathVariable(value = "id") Integer employeeId,
			 @RequestBody Employee employeeDetails) {

		Employee employee = employeeRepository.findById(employeeId).orElseThrow();

		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setSalary(employeeDetails.getSalary());

		Employee updatedEmployee = employeeRepository.save(employee);
		return updatedEmployee;
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<?> deleteEmployee(@PathVariable(value = "id") Integer employeeId) {
		Employee employee = employeeRepository.findById(employeeId).orElseThrow();

		employeeRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
				return ResponseEntity.ok(response);

		
	}

}
