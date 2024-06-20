package com.fluchtens.stats.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.fluchtens.stats.JsonResponse;
import com.fluchtens.stats.models.Task;
import com.fluchtens.stats.models.User;
import com.fluchtens.stats.repositories.TaskRepository;
import com.fluchtens.stats.repositories.UserRepository;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<JsonResponse> createTask(Task task) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            JsonResponse response = new JsonResponse("Not authenticated");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }

        int userId = Integer.parseInt(authentication.getName());
        Optional<User> optionalUser = userRepository.findById(userId);
        if (!optionalUser.isPresent()){
            JsonResponse response = new JsonResponse("No user data found");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }

        User user = optionalUser.get();
        String description = task.getDescription();
        String executionTime = task.getExecutionTime();

        Task newTask = new Task();
        newTask.setDescription(description);
        newTask.setExecutionTime(executionTime);
        newTask.setUser(user);

        taskRepository.save(newTask);

        JsonResponse response = new JsonResponse("Task created successfully");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
