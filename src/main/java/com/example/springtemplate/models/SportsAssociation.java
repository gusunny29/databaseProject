package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Date;
import java.util.List;
import javax.persistence.*;

@Entity
@Table(name = "sportsAssociations")
public class SportsAssociation {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String sport;
  Date created = new Date();

  @OneToMany(mappedBy = "sportsAssoc")
  @JsonIgnore
  private List<Team> teams;

  public Date getCreated() {
    return this.created;
  }

  public void setCreated(Date date) {
    this.created = date;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getSport() {
    return sport;
  }

  public void setSport(String sport) {
    this.sport = sport;
  }

  public List<Team> getTeams() {
    return teams;
  }
  public void setTeams(List<Team> teams) {
    this.teams = teams;
  }



}


