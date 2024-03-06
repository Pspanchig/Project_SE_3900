package com.example.se_30900.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class IP {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String IP;
    private Date date;
    private String server;

    public IP() {
    }

    public IP(long id, String IP, Date date, String server) {
        this.id = id;
        this.IP = IP;
        this.date = date;
        this.server = server;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getIP() {
        return IP;
    }

    public void setIP(String IP) {
        this.IP = IP;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getServer() {
        return server;
    }

    public void setServer(String server) {
        this.server = server;
    }
}
