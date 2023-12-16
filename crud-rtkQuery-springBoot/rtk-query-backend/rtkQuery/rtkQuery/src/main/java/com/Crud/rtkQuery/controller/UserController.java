package com.Crud.rtkQuery.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.Crud.rtkQuery.model.User;
import com.Crud.rtkQuery.service.UserService;

@RestController
public class UserController {
	private UserService userService;

	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}

	@GetMapping("/users")
	List<User> getUsers() {
		return this.userService.getAllUsers();
	}

	@GetMapping("/users/{id}")
	User getUserById(@PathVariable int id) {
		return this.userService.getUserById(id);
	}

	@PostMapping("/users")
	ResponseEntity<User> addUser(@RequestBody User user) {
		this.userService.addUser(user);
		return new ResponseEntity<User>(user, HttpStatus.CREATED);
	}

	@PutMapping("users/{id}")
	ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User user) {
		System.out.println("from controller " + user.getUserName());
		this.userService.updateUser(id, user);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

	@DeleteMapping("users/{id}")
	ResponseEntity<User> deleteUser(@PathVariable int id) {
		this.userService.deleteUser(id);
		return new ResponseEntity<User>(HttpStatus.OK);
	}
}
