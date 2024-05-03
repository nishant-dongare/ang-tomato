package dn.spring.tomato.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import dn.spring.tomato.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

  @Query(value = "SELECT a from admin_users WHERE a.users_id == ?1", nativeQuery = true)
  Admin findUserInAdmin(String userid);
}
