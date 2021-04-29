package com.example.springtemplate.daos;


import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.SportsAssociation;
import com.example.springtemplate.models.Team;
import com.example.springtemplate.repositories.PlayerRepository;
import java.util.List;

import com.example.springtemplate.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

  @RestController
  @CrossOrigin(origins = "*")
  public class PlayerOrmDao {

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    TeamRepository teamRepository;

    @PostMapping("/api/players")
    public Player createPlayer(@RequestBody Player player) {
      return playerRepository.save(player);
    }


    @GetMapping("/api/teams/{team_id}/players")
    public List<Player> findPlayerForTeam(
            @PathVariable("team_id") Integer said) {
      Team team = teamRepository.findById(said).get();
      return team.getPlayers();
    }

    @PostMapping("/api/teams/{teamId}/players")
    public Player createPlayerForTeam(
            @PathVariable("teamId") Integer teamId,
            @RequestBody Player player) {

      Team team= teamRepository.findById(teamId).get();
      player.setTeam(team);
      return playerRepository.save(player);
    }

    @GetMapping("/api/players")
    public List<Player> findAllPlayers() {
      return playerRepository.findAllPlayers();
    }

    @GetMapping("/api/players/{playerId}")
    public Player findPlayerById(
        @PathVariable("playerId") Integer id) {
      return playerRepository.findPlayerById(id);
    }

    @PutMapping("/api/players/{playerId}")
    public Player updatePlayer(
        @PathVariable("playerId") Integer id,
        @RequestBody Player userUpdates) {
      Player player = playerRepository.findPlayerById(id);
      player.setPosition(userUpdates.getPosition());
      player.setYearsPlaying(userUpdates.getYearsPlaying());
      player.setFirstName(userUpdates.getFirstName());
      player.setLastName(userUpdates.getLastName());
      player.setUsername(userUpdates.getUsername());
      player.setPassword(userUpdates.getPassword());
      player.setEmail(userUpdates.getEmail());
      player.setDateOfBirth(userUpdates.getDateOfBirth());
      player.setTeam(userUpdates.getTeam());
      return playerRepository.save(player);
    }

    @DeleteMapping("/api/players/{playerId}")
    public void deletePlayer(
        @PathVariable("playerId") Integer id) {
      playerRepository.deleteById(id);
    }
  }

