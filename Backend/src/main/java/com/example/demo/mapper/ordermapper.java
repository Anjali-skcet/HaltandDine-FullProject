package com.example.demo.mapper;

import com.example.demo.entity.*;
import com.example.demo.dto.*;
public class ordermapper {

    public static orderdto mapToOrderDto(orderentity order){
        return new orderdto(
                order.getId(),
                order.getTableno(),
                order.getCustomerId(),
                order.getTime(),
                order.getStatus()
        );
    }

    public static orderentity mapToOrder(orderdto orderDto){
        return new orderentity(
                orderDto.getId(),
                orderDto.getTableno(),
                orderDto.getCustomerId(),
                orderDto.getTime(),
                orderDto.getStatus()
        );
    }
}