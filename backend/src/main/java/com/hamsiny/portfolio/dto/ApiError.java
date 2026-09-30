package com.hamsiny.portfolio.dto;

import java.util.Map;

public record ApiError(boolean success, String message, Map<String, String> errors) {
}
