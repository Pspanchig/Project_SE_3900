package com.example.se_30900.Controller;

import com.example.se_30900.Model.User;
import com.example.se_30900.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class UsersController {
    private final UserServices services;

    @Autowired
    public UsersController(UserServices services) {
        this.services = services;
    }

    @GetMapping("/GetAllUsers")
    public ResponseEntity<?> findUsers(){
        return new ResponseEntity<>(services.findAllUsers(), HttpStatus.OK);
    }

    @PostMapping("/PostUser")
    public ResponseEntity<?> AddUser(@RequestBody User user){
        return new ResponseEntity<>(services.insertUser(user), HttpStatus.OK);
    }

}
