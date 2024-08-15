package com.example.demo.mapper;

import com.example.demo.dto.menudto;
import com.example.demo.entity.menuentity;

public class menumapper {
    public static menudto mapTosignupdto(menuentity employee){
        return new menudto(
                employee.getId(),
                employee.getDishname(),
                employee.getDishprice(),
                employee.getCategory()
        );
    }

    public static menuentity mapTosignupentity(menudto employeeDto){
        return new menuentity(
                employeeDto.getId(),
                employeeDto.getDishname(),
                employeeDto.getDishprice(),
                employeeDto.getCategory()
        );
    }
}