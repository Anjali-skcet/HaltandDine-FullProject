package com.example.demo.service.serviceimpl;

import lombok.AllArgsConstructor;
import com.example.demo.dto.menudto;
import com.example.demo.entity.menuentity;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.mapper.menumapper;
import com.example.demo.repository.menurepository;
import com.example.demo.service.menuservice;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class menuserviceimpl implements menuservice {

    private menurepository employeeRepository;

    @Override
    public menudto createEmployee(menudto employeeDto) {

        menuentity employee = menumapper.mapTosignupentity(employeeDto);
        menuentity savedEmployee = employeeRepository.save(employee);
        return menumapper.mapTosignupdto(savedEmployee);
    }

    @Override
    public menudto getEmployeeById(Long employeeId) {
        menuentity employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee is not exists with given id : " + employeeId));

        return menumapper.mapTosignupdto(employee);
    }

    @Override
    public List<menudto> getAllEmployees() {
        List<menuentity> employees = employeeRepository.findAll();
        return employees.stream().map((employee) -> menumapper.mapTosignupdto(employee))
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
