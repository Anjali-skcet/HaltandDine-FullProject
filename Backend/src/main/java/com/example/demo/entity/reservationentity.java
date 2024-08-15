package com.example.demo.entity;

import java.sql.Date;
import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "reservation")
public class reservationentity {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstname;

    @Column(name = "last_name")
    private String lastname;
    
    @Column(name = "email")
    private String email;
    
    @Column(name="date")
    private Date date;
    
    @Column(name="time")
    private String time;
    
    @Column(name="no_of_people")
    private int noofpeople;
    
    @Column(name="table_no")
    private int tableno;
    
    @Column(name="message")
    private String message;
}