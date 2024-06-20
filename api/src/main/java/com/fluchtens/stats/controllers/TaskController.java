package com.fluchtens.stats.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fluchtens.stats.JsonResponse;
import com.fluchtens.stats.models.Task;
import com.fluchtens.stats.services.TaskService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/task")
public class TaskController {
    @Autowired
    private TaskService taskService;
    
    @PostMapping("/create")
    public ResponseEntity<JsonResponse> createTask(@Valid @RequestBody Task task) {
        return taskService.createTask(task);
    }
}
