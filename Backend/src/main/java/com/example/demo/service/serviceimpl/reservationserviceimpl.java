package com.example.demo.service.serviceimpl;

import lombok.AllArgsConstructor;
import com.example.demo.dto.reservationdto;
import com.example.demo.entity.reservationentity;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.mapper.reservationmapper;
import com.example.demo.repository.reservationrepository;
import com.example.demo.service.reservationservice;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class reservationserviceimpl implements reservationservice {

    private reservationrepository employeeRepository;

    @Override
    public reservationdto createReservation(reservationdto employeeDto) {

    	reservationentity employee = reservationmapper.mapTosignupentity(employeeDto);
    	reservationentity savedEmployee = employeeRepository.save(employee);
        return reservationmapper.mapTosignupdto(savedEmployee);
    }

   /* @Override
    public reservationdto getEmployeeById(Long employeeId) {
        reservationentity employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee is not exists with given id : " + employeeId));

        return reservationmapper.mapTosignupdto(employee);
    }*/

   /* @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {

        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee is not exists with given id: " + employeeId)
        );

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());

        Employee updatedEmployeeObj = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {

        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee is not exists with given id: " + employeeId)
        );

        employeeRepository.deleteById(employeeId);
    }*/
}
