package com.example.springtemplate.daos;


import com.example.springtemplate.models.SportsAssociation;
import com.example.springtemplate.repositories.SportsAssocRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SportsAssocOrmDao {
  @Autowired
  SportsAssocRepository sportsAssocRepository;

  @PostMapping("/api/sportsAssociations")
  public SportsAssociation createSportsAssoc(@RequestBody SportsAssociation sa) {
    return sportsAssocRepository.save(sa);
  }

  @GetMapping("/api/sportsAssociations")
  public List<SportsAssociation> findAllSportsAssociations() {
    return (List<SportsAssociation>) sportsAssocRepository.findAll();
  }

  @GetMapping("/api/sportsAssociations/{saId}")
  public SportsAssociation findSportsAssocById(
      @PathVariable("saId") Integer id) {
    return sportsAssocRepository.findById(id).get();
  }



  @PutMapping("/api/sportsAssociations/{saId}")
  public SportsAssociation updateSportsAssoc(
      @PathVariable("saId") Integer id,
      @RequestBody() SportsAssociation newSA) {
    SportsAssociation sa = this.findSportsAssocById(id);
    sa.setSport(newSA.getSport());
    sa.setCreated(newSA.getCreated());
    return sportsAssocRepository.save(sa);
  }

  @DeleteMapping("/api/sportsAssociations/{saId}")
  public void deleteSportsAssoc(
      @PathVariable("saId") Integer id) {
    sportsAssocRepository.deleteById(id);
  }
}
