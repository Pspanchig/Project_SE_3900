package com.example.se_30900.Services;

import com.example.se_30900.Model.User;
import com.example.se_30900.dao.UserRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class UserServices {
    private final UserRepo repo;

    @Transactional
    public User insertUser(User user){
        return repo.save(user);
    }

    @Transactional
    public List<User> findAllUsers(){
        return repo.findAll();
    }
}
