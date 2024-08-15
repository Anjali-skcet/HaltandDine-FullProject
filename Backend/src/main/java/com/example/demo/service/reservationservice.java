package com.example.demo.service;

import com.example.demo.dto.reservationdto;

import java.util.List;

public interface reservationservice {

	reservationdto createReservation(reservationdto employeeDto);

	//reservationdto getEmployeeById(Long employeeId);

   /* List<signupdto> getAllEmployees();

    signupdto updateEmployee(Long employeeId, signupdto updatedEmployee);

    void deleteEmployee(Long employeeId);*/
}