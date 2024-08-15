package com.example.demo.mapper;

import com.example.demo.dto.reservationdto;
import com.example.demo.entity.reservationentity;

public class reservationmapper {
    public static reservationdto mapTosignupdto(reservationentity employee){
        return new reservationdto(
                employee.getId(),
                employee.getFirstname(),
                employee.getLastname(),
                employee.getEmail(),
                employee.getDate(),
                employee.getTime(),
                employee.getNoofpeople(),
                employee.getTableno(),
                employee.getMessage()
        );
    }

    public static reservationentity mapTosignupentity(reservationdto employeeDto){
        return new reservationentity(
                employeeDto.getId(),
                employeeDto.getFirstname(),
                employeeDto.getLastname(),
                employeeDto.getEmail(),
                employeeDto.getDate(),
                employeeDto.getTime(),
                employeeDto.getNoofpeople(),
                employeeDto.getTableno(),
                employeeDto.getMessage()
        );
    }
}
