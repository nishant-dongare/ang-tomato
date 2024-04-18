package dn.spring.tomato.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dn.spring.tomato.model.Admin;
import dn.spring.tomato.model.Product;
import dn.spring.tomato.model.Tags;
import dn.spring.tomato.model.User;
import dn.spring.tomato.repository.AdminRepository;
import jakarta.annotation.PostConstruct;

@Service
public class AdminService {
  @Autowired
  private AdminRepository adminRepository;

  @PostConstruct
  public void defaultData() {
    Tags fastfood = new Tags("FastFood");
    Tags pizza = new Tags("Pizza");
    Tags lunch = new Tags("Lunch");
    Tags slowfood = new Tags("SlowFood");
    Tags hamburger = new Tags("Hamburger");
    Tags fry = new Tags("Fry");
    Tags soup = new Tags("Soup");

    User user = new User("admin", "admin@admin", "admin", null);

    List<Product> plist = List.of(
        new Product(user, "Pizza Pepperoni", "10-20", 10, false,
            "italy", 4.5,
            "https://github.com/nishant-dongare/ang-tomato/blob/master/frontend/src/assets/food1.jpg?raw=true",
            List.of(
                fastfood,
                pizza,
                lunch)),
        new Product(user, "Meatball", "20-30", 20, true,
            "persia, middle east, china", 4.7,
            "https://github.com/nishant-dongare/ang-tomato/blob/master/frontend/src/assets/food2.jpg?raw=true",
            List.of(
                slowfood,
                lunch)),
        new Product(user, "Hamburger", "10-15", 5, false,
            "germany, us", 3.5,
            "https://github.com/nishant-dongare/ang-tomato/blob/master/frontend/src/assets/food3.jpg?raw=true",
            List.of(
                fastfood,
                hamburger)),
        new Product(user, "Fried Potatoes", "15-20", 2, true,
            "belgium, france", 3.3,
            "https://github.com/nishant-dongare/ang-tomato/blob/master/frontend/src/assets/food4.jpg?raw=true",
            List.of(
                fastfood,
                fry)),
        new Product(user, "Chicken Soup", "40-50", 11, false,
            "india, asia", 3.0,
            "https://github.com/nishant-dongare/ang-tomato/blob/master/frontend/src/assets/food5.jpg?raw=true",
            List.of(
                slowfood,
                soup)),
        new Product(user, "Vegetables Pizza", "40-50", 9, false,
            "italy", 4.0,
            "https://github.com/nishant-dongare/ang-tomato/blob/master/frontend/src/assets/food6.jpg?raw=true",
            List.of(
                fastfood,
                pizza,
                lunch)));

    plist.forEach(p -> p.getTags().forEach(t -> {
      List<Product> pl = t.getProductList();
      if (pl == null) {
        pl = new ArrayList<>();
      }
      pl.add(p);
      t.setProductList(pl);
    }));

    user.setProducts(plist);

    adminRepository.save(new Admin(List.of(user)));
    // userRepository.save(user);
  }
}
