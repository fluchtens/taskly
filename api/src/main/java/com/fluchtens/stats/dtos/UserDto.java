package com.fluchtens.stats.dtos;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class UserDto {
    @NotEmpty(message = "Username cannot be empty")
    @Size(min = 3, max = 16, message = "Username must be between 3 and 16 characters long")
    @Pattern(regexp = "^[a-zA-Z0-9\\-_]+$", message = "Username can only contain: letter, number, -, _")
    private String username;

    @NotEmpty(message = "Password cannot be empty")
    @Size(min = 8, max = 30, message = "Password must be between 8 and 30 characters long")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$", message = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character")
    private String password;

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }
}
