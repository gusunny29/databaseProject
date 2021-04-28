package com.example.springtemplate.daos;


import com.example.springtemplate.models.SportsAssociation;
import com.example.springtemplate.models.Team;
import com.example.springtemplate.repositories.SportsAssocRepository;
import com.example.springtemplate.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TeamOrmDao {

  @Autowired
  TeamRepository teamRepository;

  @Autowired
  SportsAssocRepository sportsAssocRepository;

  @PostMapping("/api/teams")
  public Team createTeam(@RequestBody Team team) {
    return teamRepository.save(team);
  }

  @PostMapping("/api/sportsAssociations/{saId}/teams")
  public Team createTeamForSportsAssoc(
      @PathVariable("saId") Integer said,
      @RequestBody Team team) {

    SportsAssociation sportsAssoc= sportsAssocRepository.findById(said).get();
    team.setSportsAssoc(sportsAssoc);
    return teamRepository.save(team);
  }

  @GetMapping("/api/sportsAssociations/{saId}/teams")
  public List<Team> findTeamsForSportsAssoc(
      @PathVariable("saId") Integer said) {
    SportsAssociation sportsAssoc= sportsAssocRepository.findById(said).get();
    return sportsAssoc.getTeams();
  }

  @GetMapping("/api/teams")
  public List<Team> findAllTeams() {
    return (List<Team>) teamRepository.findAll();
  }

  @GetMapping("/api/teams/{teamId}")
  public Team findTeamById(
      @PathVariable("teamId") Integer id) {
    return teamRepository.findById(id).get();
  }

  @PutMapping("/api/teams/{teamId}")
  public Team updateTeam(
      @PathVariable("teamId") Integer id,
      @RequestBody() Team newTeam) {
    Team team = this.findTeamById(id);
    team.setName(newTeam.getName());
    team.setCity(newTeam.getCity());
    team.setConference(newTeam.getConference());
    team.setWins(newTeam.getWins());
    team.setLosses(newTeam.getLosses());
    team.setSportsAssoc(newTeam.getSportsAssoc());
    return teamRepository.save(team);
  }

  @DeleteMapping("/api/teams/{teamId}")
  public void deleteTeam(
      @PathVariable("teamId") Integer id) {
    teamRepository.deleteById(id);
  }
}
