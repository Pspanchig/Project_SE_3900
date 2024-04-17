package com.example.se_30900.dao;

import com.example.se_30900.Model.ServerIP;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ServerRepo extends JpaRepository<ServerIP, Long> {
    @Modifying
    @Query("DELETE FROM ServerIP i WHERE i.hostname = :hostname")
    void deleteByHostname(@Param("hostname") String hostname);
}
