package com.example.demo.entity;

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
@Table(name = "orders")
public class  orderentity{

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "table_no")
    private int tableno;
    
    @Column(name = "customer_id")
    private String customerId;

    @Column(name = "order_time")
    private int time;
   
    @Column(name = "order_status")
    private String status;
    
}