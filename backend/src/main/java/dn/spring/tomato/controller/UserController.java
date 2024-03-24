package dn.spring.tomato.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dn.spring.tomato.model.Product;
import dn.spring.tomato.model.Tags;
import dn.spring.tomato.model.User;
import dn.spring.tomato.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/user")
public class UserController {

  @Autowired
  private UserService userService;

  @GetMapping("/hello")
  public String hello() {
    return "Hello World";
  }

  @GetMapping("/id/{id}")
  public User getUserById(@PathVariable int id) {
    return userService.getUserById(id);

  }

  @PostMapping("/auth")
  public ResponseEntity<User> checkUser(@RequestBody UserAuth uauth) {
    User user = userService.getUserByEmailAndPass(uauth.email, uauth.passkey);
    if (user == null)
      return new ResponseEntity<User>(user, HttpStatus.BAD_REQUEST);
    return new ResponseEntity<User>(user, HttpStatus.ACCEPTED);
  }

  @PostMapping("/register")
  public ResponseEntity<User> registerUser(@RequestBody UserAuth uauth) {
    System.out.println(uauth);
    User user = userService.saveUser(new User(uauth.getUsername(), uauth.getEmail(), uauth.getPasskey(), " "));
    if (user == null)
      return new ResponseEntity<User>(user, HttpStatus.BAD_REQUEST);
    return new ResponseEntity<User>(user, HttpStatus.ACCEPTED);
  }

  @GetMapping("/test")
  public User test() {
    List<Tags> tags = List.of(new Tags("FastFood"), new Tags("FlashFood"));

    User u1 = new User("User1", "user1@email", "123456", null);

    Product p1 = new Product(u1, "Pizza Pepperoni", "10-20", 10, false, "italy", 4.5,
        "assets/food-1.jpg", tags);
    Product p2 = new Product(u1, "Meatball", "20-30", 20, true, "persia, middle east, china", 4.7, "assets/food-2.jpg",
        tags.subList(1, 1));

    List<Product> plist = List.of(p1, p2);

    tags.get(0).setProducts(plist);
    tags.get(1).setProducts(List.of(plist.get(1)));

    u1.setProducts(plist);

    return userService.saveUser(u1);
  }

  static class UserAuth {
    private String username;
    private String email;
    private String passkey;

    public String getUsername() {
      return username;
    }

    public String getEmail() {
      return email;
    }

    public String getPasskey() {
      return passkey;
    }

    @Override
    public String toString() {
      return "UserAuth [username=" + username + ", email=" + email + ", passkey=" + passkey + "]";
    }

  }
}