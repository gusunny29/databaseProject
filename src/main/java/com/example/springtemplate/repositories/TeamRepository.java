package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository
    extends CrudRepository<Team, Integer> {
}