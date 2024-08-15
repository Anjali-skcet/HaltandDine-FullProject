package com.example.demo.mapper;

import com.example.demo.dto.signupdto;
import com.example.demo.entity.signupentity;

public class signupmapper {

    public static signupdto mapTosignupdto(signupentity employee){
        return new signupdto(
                employee.getId(),
                employee.getName(),
                employee.getEmail(),
                employee.getPassword()
        );
    }

    public static signupentity mapTosignupentity(signupdto employeeDto){
        return new signupentity(
                employeeDto.getId(),
                employeeDto.getName(),
                employeeDto.getEmail(),
                employeeDto.getPassword()
        );
    }
}
