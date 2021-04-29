package com.example.springtemplate.repositories;

import com.example.springtemplate.models.SportsAssociation;
import org.springframework.data.repository.CrudRepository;

public interface SportsAssocRepository
    extends CrudRepository<SportsAssociation, Integer> {
}
