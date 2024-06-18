package com.fluchtens.stats.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fluchtens.stats.dtos.UserDto;
import com.fluchtens.stats.services.AuthService;

import jakarta.validation.Valid;

@RestController
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @RequestBody UserDto userDto) {
        return authService.registerUser(userDto);
    }
}
