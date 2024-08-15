package com.example.demo.service.serviceimpl;

import lombok.AllArgsConstructor;
import com.example.demo.dto.signupdto;
import com.example.demo.entity.signupentity;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.mapper.signupmapper;
import com.example.demo.repository.signuprepository;
import com.example.demo.service.signupservice;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class signupserviceimpl implements signupservice {

    private signuprepository employeeRepository;

    @Override
    public signupdto createUser(signupdto employeeDto) {

        signupentity employee = signupmapper.mapTosignupentity(employeeDto);
        signupentity savedEmployee = employeeRepository.save(employee);
        return signupmapper.mapTosignupdto(savedEmployee);
    }

    @Override
    public signupdto getUserById(Long employeeId) {
        signupentity employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee is not exists with given id : " + employeeId));

        return signupmapper.mapTosignupdto(employee);
    }

    @Override
    public List<signupdto> getAllUsers() {
        List<signupentity> employees = employeeRepository.findAll();
        return employees.stream().map((employee) -> signupmapper.mapTosignupdto(employee))
                .collect(Collectors.toList());
    }

   /* @Override
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
