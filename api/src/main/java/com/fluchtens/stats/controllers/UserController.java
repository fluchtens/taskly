package com.fluchtens.stats.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fluchtens.stats.models.User;
import com.fluchtens.stats.repositories.UserRepository;


@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/me")
    public User getUserInfo() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Not authenticated");
        }

        String name = authentication.getName();
        int id = Integer.parseInt(name);
        Optional<User> user = userRepository.findById(id);
        if (!user.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No user data found");
        }
        return user.get();
    }
}
