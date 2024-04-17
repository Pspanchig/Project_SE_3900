package com.example.se_30900.Controller;

import com.example.se_30900.Model.ServerIP;
import com.example.se_30900.Services.ServerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class ServerController {
    private final ServerServices services;

    @Autowired
    public ServerController(ServerServices services) {
        this.services = services;
    }

    @GetMapping("/GetAllServers")
    public ResponseEntity<?> findServers(){
        return new ResponseEntity<>(services.findServers(), HttpStatus.OK);
    }

    @PostMapping("/PostServer")
    public ResponseEntity<?> AddServer(@RequestBody ServerIP server){
        return new ResponseEntity<>(services.InsertServer(server), HttpStatus.OK);
    }

    @DeleteMapping("/deleteServer/{hostname}")
    public ResponseEntity<?> deleteServerbyHostname(@PathVariable String hostname){
        services.DeleteServer(hostname);
        return ResponseEntity.ok().build();
    }
    @PutMapping("/updateServerById/{id}")
    public ResponseEntity<ServerIP> updateServer(@PathVariable Long id, @RequestBody ServerIP server){
        ServerIP updatedServer = services.updateServerIP(id, server.getDestinationAddress(), server.getHostname(), server.getDestinationPort(), server.getCreatedBy(), server.getModifyBy(), server.getDateCreated());
        return ResponseEntity.ok(updatedServer);
    }
}
