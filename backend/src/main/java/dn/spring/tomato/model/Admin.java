package dn.spring.tomato.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Admin {

  @Id
  private int id;

  @OneToMany(cascade = CascadeType.ALL)
  List<User> users;

  public Admin(List<User> users) {
    this.users = users;
  }

}
