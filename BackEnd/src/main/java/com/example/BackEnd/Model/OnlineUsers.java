package com.example.se_30900.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class OnlineUsers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String Username;

    public OnlineUsers() {
    }

    public OnlineUsers(long id, String username) {
        this.id = id;
        Username = username;
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
}
