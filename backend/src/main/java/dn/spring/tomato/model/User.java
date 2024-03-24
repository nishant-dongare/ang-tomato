package dn.spring.tomato.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "user_table")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Column(nullable = false, length = 20)
  private String name;

  @Column(nullable = false, length = 15)
  private String email;

  @Column(nullable = false, length = 12)
  private String passkey;

  @Column
  private String address;
  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  private List<Product> products;

  public User(String name, String email, String passkey, String address) {
    this.name = name;
    this.email = email;
    this.passkey = passkey;
    this.address = address;
  }
}
