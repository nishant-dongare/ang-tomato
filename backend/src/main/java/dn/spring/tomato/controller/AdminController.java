package dn.spring.tomato.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dn.spring.tomato.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {

  @Autowired
  AdminService adminService;

  @GetMapping("/")
  public String hello() {
    return "Hello Admin";
  }

  @GetMapping("/{userId}")
  String findUserInAdmin(@PathVariable String userId) {
    return String.valueOf(adminService.findUserInAdmin(userId).getId());
  }

}
