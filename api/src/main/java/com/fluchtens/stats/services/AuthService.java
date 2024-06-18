package com.fluchtens.stats.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.fluchtens.stats.dtos.UserDto;
import com.fluchtens.stats.models.User;
import com.fluchtens.stats.repositories.UserRepository;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<String> registerUser(UserDto userDto) {
        String username = userDto.getUsername();
        String password = userDto.getPassword();

        if (userRepository.findByUsername(username) != null) {
            return new ResponseEntity<>("This username is already taken", HttpStatus.CONFLICT);
        }

        User user = new User();
        user.setUsername(username);
        user.setPassword(password);

        userRepository.save(user);

        return new ResponseEntity<>("User created successfully", HttpStatus.OK);
    }
}
