package com.example.se_30900.Services;

import com.example.se_30900.Model.ServerIP;
import com.example.se_30900.dao.ServerRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ServerServices {
    private final ServerRepo repo;

    @Transactional
    public ServerIP InsertServer(ServerIP server){
        return repo.save(server);
    }

    @Transactional
    public List<ServerIP> findServers(){
        return repo.findAll();
    }

    @Transactional
    public void DeleteServer(String hostname){
        repo.deleteByHostname(hostname);
    }

    @Transactional
    public ServerIP updateServerIP(Long id, String destinationAddress, String hostname, String destinationPort, String createdBy, String modifyBy, Date date) {
        return repo.findById(id)
                .map(serverIP -> {
                    serverIP.setDestinationAddress(destinationAddress);
                    serverIP.setHostname(hostname);
                    serverIP.setDestinationPort(destinationPort);
                    serverIP.setCreatedBy(createdBy);
                    serverIP.setModifyBy(modifyBy);
                    serverIP.setDateCreated(date);
                    return repo.save(serverIP);
                }).orElseThrow(() -> new RuntimeException("ServerIP not found with id: " + id));
    }
}
