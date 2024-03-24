package dn.spring.tomato.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dn.spring.tomato.model.User;
import dn.spring.tomato.repository.UserRepository;

@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;

  public User saveUser(User user) {
    if (user != null) {
      return userRepository.save(user);
    }
    return null;
  }

  public User getUserById(int id) {
    return userRepository.findById(id).get();
  }

  public User getUserByEmailAndPass(String email, String pass) {
    return userRepository.getUserByEmailAndPass(email, pass).orElse(null);
  }
}
