package com.example.se_30900.dao;

import com.example.se_30900.Model.IP;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

public interface IP_Repo extends JpaRepository<IP, Long> {
    @Modifying
    @Query("DELETE FROM IP i WHERE i.ip = :ip")
    void deleteByIp(@Param("ip") String ip);

    @Modifying
    @Query("UPDATE IP i SET i.ip = :ip, i.server = :server, i.port = :port, i.applicationID = :applicationID, i.date = :date WHERE i.ip = :ip")
    void ModifyIP(@Param("ip") String ip, @Param("date") Date date, @Param("server") String server, @Param("applicationID") String applicationID, @Param("port") int port);

}
