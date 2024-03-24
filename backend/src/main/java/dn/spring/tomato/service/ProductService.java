package dn.spring.tomato.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dn.spring.tomato.model.Product;
import dn.spring.tomato.repository.ProductRepository;

@Service
public class ProductService {
  @Autowired
  private ProductRepository productRepository;

  public void addProduct(Product product) {
    if (product != null) {
      productRepository.save(product);
    }
  }

  public List<Product> getProductsBySearch(String term) {
    return productRepository.getProductsBySearch(term);
  }
}
