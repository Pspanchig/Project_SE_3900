package com.example.se_30900.Services;

import com.example.se_30900.Model.IP;
import com.example.se_30900.dao.IP_Repo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
