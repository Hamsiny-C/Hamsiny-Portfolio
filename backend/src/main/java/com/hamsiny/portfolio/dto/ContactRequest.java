package com.hamsiny.portfolio.dto;

import jakarta.validation.constraints.*;

public record ContactRequest(
        @NotBlank(message = "Name is required") @Size(min = 2, max = 100, message = "Name must be 2-100 characters") String name,
        @NotBlank(message = "Email is required") @Email(message = "Enter a valid email address") @Size(max = 150) String email,
        @NotBlank(message = "Message is required") @Size(min = 10, max = 2000, message = "Message must be 10-2000 characters") String message) {
}
