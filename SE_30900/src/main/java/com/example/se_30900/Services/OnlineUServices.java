package com.example.se_30900.Services;

import com.example.se_30900.Model.OnlineUsers;
import com.example.se_30900.dao.OnlineRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class OnlineUServices {
    private final OnlineRepo repo;

    @Transactional
    public OnlineUsers InsertOnlineUser(OnlineUsers users){
        return repo.save(users);
    }

    @Transactional
    public List<OnlineUsers> findAllOnlineUsers(){
        return repo.findAll();
    }

    @Transactional
    public void deleteByUsername(String username) {
        repo.deleteByUsername(username);
    }
}
