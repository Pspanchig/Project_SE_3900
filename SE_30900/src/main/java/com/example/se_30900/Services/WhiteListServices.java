package com.example.se_30900.Services;

import com.example.se_30900.Model.WhiteList;
import com.example.se_30900.dao.WhiteListRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class WhiteListServices {
    private final WhiteListRepo repo;

    @Transactional
    public WhiteList InsertWhiteList(WhiteList wList){
        return repo.save(wList);
    }

    @Transactional
    public List<WhiteList> findAllwList(){
        return repo.findAll();
    }

    @Transactional
    public void deleteAllByIp(String ip) {
        repo.deleteByIp(ip);
    }


}
