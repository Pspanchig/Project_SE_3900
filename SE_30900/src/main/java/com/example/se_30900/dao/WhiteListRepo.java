package com.example.se_30900.dao;

import com.example.se_30900.Model.WhiteList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface WhiteListRepo extends JpaRepository<WhiteList, Long> {
    @Modifying
    @Query("DELETE FROM WhiteList i WHERE i.ip = :ip")
    void deleteByIp(@Param("ip") String ip);
}
