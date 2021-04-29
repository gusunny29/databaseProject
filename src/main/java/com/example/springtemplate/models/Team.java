package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="teams")
public class Team {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String city;
  private String name;
  private String conference;
  private int wins;
  private int losses;


  @OneToMany(mappedBy = "team")
  @JsonIgnore
  private List<Player> players;

  @ManyToOne
  @JsonIgnore
  private SportsAssociation sportsAssoc;


  //GETTERS AND SETTERs
  public List<Player> getPlayers() {
    return players;
  }
  public void setPlayers(List<Player> players) {
    this.players = players;
  }


  public Integer getId() {
    return id;
  }
  public void setId(Integer id) {
    this.id = id;
  }

  public String getCity() {
    return city;
  }
  public void setCity(String city) {
    this.city = city;
  }

  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }

  public String getConference() {
    return conference;
  }
  public void setConference(String conference) {
    this.conference = conference;
  }

  public int getWins() {
    return wins;
  }
  public void setWins(int wins) {
    this.wins = wins;
  }

  public int getLosses() {
    return losses;
  }
  public void setLosses(int losses) {
    this.losses = losses;
  }

  public SportsAssociation getSportsAssoc() {
    return sportsAssoc;
  }
  public void setSportsAssoc(SportsAssociation sportsAssoc) {
    this.sportsAssoc = sportsAssoc;
  }


}

