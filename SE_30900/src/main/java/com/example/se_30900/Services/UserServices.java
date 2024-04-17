package com.example.se_30900.Services;

import com.example.se_30900.Model.UserT;
import com.example.se_30900.dao.UserRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserServices {
    private final UserRepo repo;

    @Transactional
    public UserT insertUser(UserT user){
        return repo.save(user);
    }

    @Transactional
    public List<UserT> findAllUsers(){
        return repo.findAll();
    }
    @Transactional
    public void deleteByUsername(String username) {
        repo.deleteByUsername(username);
    }
    @Transactional
    public UserT updateUser(Long id, String username, String password, String user_IP, String is_admin, Date connection, Boolean canAccesMID, Boolean canAccesPup, Boolean canAccesINF, Boolean canAccesTCS, Boolean canAccesMQS) {
        return repo.findById(id)
                .map(user -> {
                    user.setUsername(username);
                    user.setPassword(password);
                    user.setUser_IP(user_IP);
                    user.setIs_admin(is_admin);
                    user.setConnection(connection);
                    user.setCanAccesMID(canAccesMID);
                    user.setCanAccesPup(canAccesPup);
                    user.setCanAccesINF(canAccesINF);
                    user.setCanAccesTCS(canAccesTCS);
                    user.setCanAccesMQS(canAccesMQS);
                    return repo.save(user);
                }).orElseThrow(() -> new RuntimeException("User not found with id " + id));
    }
}
