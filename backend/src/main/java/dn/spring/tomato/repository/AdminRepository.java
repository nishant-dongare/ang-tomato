package dn.spring.tomato.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dn.spring.tomato.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
}
