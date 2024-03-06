package com.example.se_30900.Controller;

import com.example.se_30900.Model.IP;
import com.example.se_30900.Services.IP_Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class IP_Controller {
    private final IP_Services services;

    @Autowired
    public IP_Controller(IP_Services services) {
        this.services = services;
    }

    @GetMapping("/Hello")
    public String Helloworld(){
        return "Hello World!";
    }

    @PostMapping("/PostIP")
    public ResponseEntity<?> save(@RequestBody IP ip){
        return  new ResponseEntity<>(services.InsertIP(ip), HttpStatus.OK);
    }

    @GetMapping("/GetAllIPs")
    public ResponseEntity<?> findAll(){
        return new ResponseEntity<>(services.findAllIP(), HttpStatus.OK);
    }
}
