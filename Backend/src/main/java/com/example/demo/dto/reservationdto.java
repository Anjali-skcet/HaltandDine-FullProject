package com.example.demo.dto;

import java.sql.Date;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class reservationdto {
	private Long id;
    private String firstname;
    private String lastname;
    private String email;     
    private Date date; 
    private String time;     
    private int noofpeople; 
    private int tableno;
    private String message;
}
