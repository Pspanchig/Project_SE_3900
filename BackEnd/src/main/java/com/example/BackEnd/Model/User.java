package com.example.se_30900.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String Username;
    private String Password;
    private String User_IP;
    private boolean Is_admin;
    private Date connection;

    public User() {
    }

    public User(long id, String username, String password, String user_IP, boolean is_admin, Date connection) {
        this.id = id;
        Username = username;
        Password = password;
        User_IP = user_IP;
        Is_admin = is_admin;
        this.connection = connection;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        Username = username;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getUser_IP() {
        return User_IP;
    }

    public void setUser_IP(String user_IP) {
        User_IP = user_IP;
    }

    public boolean isIs_admin() {
        return Is_admin;
    }

    public void setIs_admin(boolean is_admin) {
        Is_admin = is_admin;
    }

    public Date getConnection() {
        return connection;
    }

    public void setConnection(Date connection) {
        this.connection = connection;
    }
}
