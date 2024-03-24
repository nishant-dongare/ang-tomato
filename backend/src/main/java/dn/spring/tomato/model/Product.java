package dn.spring.tomato.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Product {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String name;
  private String cookTime;
  private int price;
  private boolean favorite;
  private String origins;
  private double stars;
  private String imageUrl;

  @ManyToOne()
  @JsonIgnore
  @JoinColumn(name = "userId")
  private User user;

  @ManyToMany(mappedBy = "products", cascade = CascadeType.ALL)
  @JsonIgnore
  List<Tags> tags;

  public Product(User user, String name, String cookTime, int price, boolean favorite, String origins, double stars,
      String imageUrl, List<Tags> tags) {
    this.name = name;
    this.cookTime = cookTime;
    this.price = price;
    this.favorite = favorite;
    this.origins = origins;
    this.stars = stars;
    this.imageUrl = imageUrl;
    this.user = user;
    this.tags = tags;
  }
}
