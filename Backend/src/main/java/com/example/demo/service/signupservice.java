package com.example.demo.service;

import com.example.demo.dto.signupdto;

import java.util.List;

public interface signupservice {
    signupdto createUser(signupdto employeeDto);

    signupdto getUserById(Long employeeId);

    List<signupdto> getAllUsers();

   /* signupdto updateEmployee(Long employeeId, signupdto updatedEmployee);

    void deleteEmployee(Long employeeId);*/
}