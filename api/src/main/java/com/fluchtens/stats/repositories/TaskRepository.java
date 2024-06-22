package com.fluchtens.stats.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fluchtens.stats.models.Task;
import com.fluchtens.stats.models.User;

@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {
    List<Task> findByUser(User user);
}
