package dn.spring.tomato.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dn.spring.tomato.exceptions.AuthenticationException;
import dn.spring.tomato.exceptions.IllegalArgumentsException;
import dn.spring.tomato.exceptions.ResourceNotFoundException;
import dn.spring.tomato.model.User;
import dn.spring.tomato.repository.UserRepository;

@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;

  public User saveUser(User user) {
    if (user == null)
      throw new IllegalArgumentsException("User");
    return userRepository.save(user);
  }

  public User getUserById(int id) {
    return userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User", "Id"));
  }

  public User getUserByEmailAndPass(String email, String pass) {
    return userRepository.getUserByEmailAndPass(email, pass).orElseThrow(AuthenticationException::new);
  }
}
