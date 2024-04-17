package com.example.se_30900.Controller;

import com.example.se_30900.Model.OnlineUsers;
import com.example.se_30900.Services.OnlineUServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class OnlineUsersController {
    private final OnlineUServices services;

    @Autowired
    public OnlineUsersController(OnlineUServices services) {
        this.services = services;
    }

    @GetMapping("/GetAllOnline")
    public ResponseEntity<?> findOnline(){
        return new ResponseEntity<>(services.findAllOnlineUsers(), HttpStatus.OK);}

    @PostMapping("/OnlinePost")
    public ResponseEntity<?> AddOnline(@RequestBody OnlineUsers users){
        return new ResponseEntity<>(services.InsertOnlineUser(users), HttpStatus.OK);
    }
    @DeleteMapping("/deleteByUsername/{username}")
    public ResponseEntity<?> deleteAllByIp(@PathVariable String username) {
        services.deleteByUsername(username);
        return ResponseEntity.ok().build();
    }
}
