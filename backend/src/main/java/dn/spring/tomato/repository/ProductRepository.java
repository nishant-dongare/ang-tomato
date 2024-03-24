package dn.spring.tomato.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import dn.spring.tomato.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

  @Query("SELECT p from dn.spring.tomato.model.Product p WHERE p.name LIKE %?1% OR p.origins LIKE %?1%")
  List<Product> getProductsBySearch(String term);
}
