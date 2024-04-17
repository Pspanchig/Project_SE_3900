package com.example.se_30900.Services;

import com.example.se_30900.Model.IP;
import com.example.se_30900.dao.IP_Repo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class IP_Services {
    private final IP_Repo repo;
    @Transactional
    public IP InsertIP(IP ip){
        return repo.save(ip);
    }

    @Transactional
    public List<IP> findAllIP(){
        return repo.findAll();
    }

    @Transactional
    public void deleteAllByIp(String ip) {
        repo.deleteByIp(ip);
    }

    @Transactional
    public IP updateIP(Long id, String ip, Date date, String server, String applicationID, int port, String createdBy,String modifyBy){
        return repo.findById(id)
                .map(IP -> {
                    IP.setIp(ip);
                    IP.setApplicationID(applicationID);
                    IP.setPort(port);
                    IP.setServer(server);
                    IP.setDate(date);
                    IP.setCreatedBy(createdBy);
                    IP.setModifyBy(modifyBy);
                    return repo.save(IP);
                }).orElseThrow(() -> new RuntimeException("IP not found with that id" + id));
    }


}
