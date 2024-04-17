package com.example.se_30900.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class UserT {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String username;
    private String password;
    private String user_IP;
    private String is_admin;
    private Date connection;
    private Boolean canAccesMID;
    private Boolean canAccesPup;
    private Boolean canAccesINF;
    private Boolean canAccesTCS;
    private Boolean canAccesMQS;

    public UserT() {
    }

    public UserT(long id, String username, String password, String user_IP, String is_admin, Date connection, Boolean canAccesMID, Boolean canAccesPup, Boolean canAccesINF, Boolean canAccesTCS, Boolean canAccesMQS) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.user_IP = user_IP;
        this.is_admin = is_admin;
        this.connection = connection;
        this.canAccesMID = canAccesMID;
        this.canAccesPup = canAccesPup;
        this.canAccesINF = canAccesINF;
        this.canAccesTCS = canAccesTCS;
        this.canAccesMQS = canAccesMQS;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUser_IP() {
        return user_IP;
    }

    public void setUser_IP(String user_IP) {
        this.user_IP = user_IP;
    }

    public String getIs_admin() {
        return is_admin;
    }

    public void setIs_admin(String is_admin) {
        this.is_admin = is_admin;
    }

    public Date getConnection() {
        return connection;
    }

    public void setConnection(Date connection) {
        this.connection = connection;
    }

    public Boolean getCanAccesMID() {
        return canAccesMID;
    }

    public void setCanAccesMID(Boolean canAccesMID) {
        this.canAccesMID = canAccesMID;
    }

    public Boolean getCanAccesPup() {
        return canAccesPup;
    }

    public void setCanAccesPup(Boolean canAccesPup) {
        this.canAccesPup = canAccesPup;
    }

    public Boolean getCanAccesINF() {
        return canAccesINF;
    }

    public void setCanAccesINF(Boolean canAccesINF) {
        this.canAccesINF = canAccesINF;
    }

    public Boolean getCanAccesTCS() {
        return canAccesTCS;
    }

    public void setCanAccesTCS(Boolean canAccesTCS) {
        this.canAccesTCS = canAccesTCS;
    }

    public Boolean getCanAccesMQS() {
        return canAccesMQS;
    }

    public void setCanAccesMQS(Boolean canAccesMQS) {
        this.canAccesMQS = canAccesMQS;
    }
}