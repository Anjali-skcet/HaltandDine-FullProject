package com.example.demo.service;

import com.example.demo.dto.menudto;

import java.util.List;

public interface menuservice {
    menudto createEmployee(menudto employeeDto);

    menudto getEmployeeById(Long employeeId);

   List<menudto> getAllEmployees();

   /* signupdto updateEmployee(Long employeeId, signupdto updatedEmployee);

    void deleteEmployee(Long employeeId);*/
}