package com.example.se_30900.Controller;

import com.example.se_30900.Model.WhiteList;
import com.example.se_30900.Services.WhiteListServices;
import com.example.se_30900.dao.WhiteListRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class WhiteListController {
    private final WhiteListServices services;

    @Autowired
    public WhiteListController(WhiteListServices services) {
        this.services = services;
    }

    @GetMapping("/GetWhiteList")
    public ResponseEntity<?> findAllList(){
        return new ResponseEntity<>(services.findAllwList(), HttpStatus.OK);
    }

    @PostMapping("/PostWhiteList")
    public ResponseEntity<?> PostList(@RequestBody WhiteList list){
        return new ResponseEntity<>(services.InsertWhiteList(list), HttpStatus.OK);
    }
    @DeleteMapping("/deletefromWhiteList/{ip}")
    public ResponseEntity<?> deleteAllByIp(@PathVariable String ip) {
        services.deleteAllByIp(ip);
        return ResponseEntity.ok().build();
    }
}
