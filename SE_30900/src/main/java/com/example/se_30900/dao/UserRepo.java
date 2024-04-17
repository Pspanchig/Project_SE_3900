package com.example.se_30900.dao;

import com.example.se_30900.Model.UserT;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepo extends JpaRepository<UserT, Long> {
    @Modifying
    @Query("DELETE FROM UserT i WHERE i.username = :username")
    void deleteByUsername(@Param("username") String username);
}
