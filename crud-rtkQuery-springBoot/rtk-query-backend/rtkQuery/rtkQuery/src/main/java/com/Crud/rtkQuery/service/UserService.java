package com.Crud.rtkQuery.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.Crud.rtkQuery.exceptions.UserNotFound;
import com.Crud.rtkQuery.model.User;
import com.Crud.rtkQuery.model.UserErrorResponse;

@Service
public class UserService {
	List<User> users;

	public UserService() {
		users = new ArrayList<User>();
		users.add(new User(generateUserId(), "test1"));
		users.add(new User(generateUserId(), "test2"));

	}

	public int generateUserId() {
		return this.users.size() + 1;
	}

	public void addUser(User user) {
		user.setId(generateUserId());
		this.users.add(user);
	}

	public List<User> getAllUsers() {
		return this.users;
	}

	public User getUserById(int id) throws UserNotFound {
		for (User tempUser : users)
			if (tempUser.getId() == id)
				return tempUser;
		throw new UserNotFound("user not found");
	}

	public void updateUser(int id, User user) {
		for (User tempUser : users)
			if (tempUser.getId() == user.getId()) {
				tempUser.setUserName(user.getUserName());
				return;
			}
		throw new UserNotFound("user not found");
	}

	public void deleteUser(int id) {
		for (User tempUser : users)
			if (tempUser.getId() == id) {
				users.remove(tempUser);
				return;
			}
		throw new UserNotFound("user not found");
	}

}
