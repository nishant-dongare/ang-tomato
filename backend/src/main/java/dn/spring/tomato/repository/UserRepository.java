package dn.spring.tomato.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import dn.spring.tomato.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

  @Query("SELECT u from dn.spring.tomato.model.User u WHERE u.email = ?1 AND u.passkey = ?2")
  Optional<User> getUserByEmailAndPass(String email, String passkey);
}
