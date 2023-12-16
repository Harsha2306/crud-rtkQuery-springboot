package com.Crud.rtkQuery.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import com.Crud.rtkQuery.model.UserErrorResponse;

@ControllerAdvice
public class UserExceptionHandler {
	@ExceptionHandler
	public ResponseEntity<UserErrorResponse> handleUserNotFoundException(UserNotFound exc) {
		UserErrorResponse userErrorResponse = new UserErrorResponse();
		userErrorResponse.setMessage(exc.getMessage());
		userErrorResponse.setStatus(HttpStatus.NOT_FOUND.value());
		userErrorResponse.setTimeStamp(System.currentTimeMillis());
		return new ResponseEntity<UserErrorResponse>(userErrorResponse, HttpStatus.NOT_FOUND);
	}
}
