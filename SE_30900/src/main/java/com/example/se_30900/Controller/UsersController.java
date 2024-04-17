package com.example.se_30900.Controller;

import com.example.se_30900.Model.UserT;
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
    public ResponseEntity<?> AddUser(@RequestBody UserT user){
        return new ResponseEntity<>(services.insertUser(user), HttpStatus.OK);
    }
    @DeleteMapping("/deleteUser/{username}")
    public ResponseEntity<?> deleteAllByIp(@PathVariable String username) {
        services.deleteByUsername(username);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<UserT> updateIP(@PathVariable Long id, @RequestBody UserT userDetails){
        UserT updatedUser = services.updateUser(
                id,
                userDetails.getUsername(),
                userDetails.getPassword(),
                userDetails.getUser_IP(),
                userDetails.getIs_admin(),
                userDetails.getConnection(),
                userDetails.getCanAccesMID(),
                userDetails.getCanAccesPup(),
                userDetails.getCanAccesINF(),
                userDetails.getCanAccesTCS(),
                userDetails.getCanAccesMQS()
        );
        return ResponseEntity.ok(updatedUser);
    }

}
