package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;



  @Entity
  @Table(name="players")
  public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String position;
    private int yearsPlaying;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    Date dateOfBirth = new Date();


    @ManyToOne
    @JsonIgnore
    private Team team;


    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getPosition() { return position; }
    public void setPosition(String position) { this.position = position; }
    public int getYearsPlaying() { return yearsPlaying; }
    public void setYearsPlaying(int yearsPlaying) { this.yearsPlaying = yearsPlaying; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public Date getDateOfBirth() {
      return dateOfBirth;
    }
    public void setDateOfBirth(Date date) {
      this.dateOfBirth = date;
    }

    public Team getTeam() {
      return this.team;
    }
    public void setTeam(Team team) {
      this.team = team;
    }




    public Player(String position,
        int yearsPlaying, String username,
        String password, String first_name,
        String last_name, String email, Date date) {
      this.position = position;
      this.yearsPlaying = yearsPlaying;
      this.username = username;
      this.password = password;
      this.firstName = first_name;
      this.lastName = last_name;
      this.email = email;
      this.dateOfBirth = date;

    }

    public Player() {}
  }


