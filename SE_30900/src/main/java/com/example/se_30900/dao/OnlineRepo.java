package com.example.se_30900.dao;

import com.example.se_30900.Model.OnlineUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface OnlineRepo extends JpaRepository<OnlineUsers, Long> {
    @Modifying
    @Query("DELETE FROM OnlineUsers i WHERE i.username = :username")
    void deleteByUsername(@Param("username") String ip);
}
