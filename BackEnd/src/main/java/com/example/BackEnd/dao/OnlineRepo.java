package com.example.se_30900.dao;

import com.example.se_30900.Model.OnlineUsers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OnlineRepo extends JpaRepository<OnlineUsers, Long> {
}
