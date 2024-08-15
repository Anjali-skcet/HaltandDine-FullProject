package com.example.demo.controller;

import lombok.AllArgsConstructor;
import com.example.demo.dto.reservationdto;
import com.example.demo.service.reservationservice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/forkandfortune")
public class reservationcontroller {

    private reservationservice employeeService;

    // Build Add Employee REST API
    @PostMapping("/reserve")
    public ResponseEntity<reservationdto> createReservation(@RequestBody reservationdto employeeDto){
        reservationdto savedEmployee = employeeService.createReservation(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    // Build Get Employee REST API
  /* @GetMapping("{id}")
    public ResponseEntity<reservationdto> getUserById(@PathVariable("id") Long employeeId){
        reservationdto employeeDto = employeeService.getUserById(employeeId);
        return ResponseEntity.ok(employeeDto);
    }

    // Build Get All Employees REST API
    @GetMapping
    public ResponseEntity<List<reservationdto>> getAllUsers(){
        List<reservationdto> employees = employeeService.getAllUsers();
        return ResponseEntity.ok(employees);
    }
*/
    // Build Update Employee REST API
   /* @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId,
                                                      @RequestBody EmployeeDto updatedEmployee){
          EmployeeDto employeeDto = employeeService.updateEmployee(employeeId, updatedEmployee);
          return ResponseEntity.ok(employeeDto);
    }

    // Build Delete Employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee deleted successfully!.");
    }*/
}
