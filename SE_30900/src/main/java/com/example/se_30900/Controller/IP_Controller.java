package com.example.se_30900.Controller;

import com.example.se_30900.Model.IP;
import com.example.se_30900.Services.IP_Services;
import com.example.se_30900.dao.IP_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import java.util.Date;

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

    @DeleteMapping("/deleteByIp/{ip}")
    public ResponseEntity<?> deleteAllByIp(@PathVariable String ip) {
        services.deleteAllByIp(ip);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/updateByIp/{id}")
    public ResponseEntity<IP>  updateIP(@PathVariable Long id, @RequestBody IP ipdetails){
        IP updateIp = services.updateIP(id, ipdetails.getIp(), ipdetails.getDate(), ipdetails.getApplicationID(), ipdetails.getServer(), ipdetails.getPort(), ipdetails.getCreatedBy(), ipdetails.getModifyBy());
        return ResponseEntity.ok(updateIp);
    }



}
