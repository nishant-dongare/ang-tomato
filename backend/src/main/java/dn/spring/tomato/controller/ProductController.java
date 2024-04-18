package dn.spring.tomato.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import dn.spring.tomato.model.Product;
import dn.spring.tomato.model.Tags;
import dn.spring.tomato.service.ProductService;
import dn.spring.tomato.service.TagService;
import dn.spring.tomato.service.UserService;

@RestController
public class ProductController {

  @Autowired
  private UserService userService;
  @Autowired
  private TagService tagService;
  @Autowired
  private ProductService productService;

  @GetMapping("/foods")
  List<Product> productList() {
    return userService.getUserById(1).getProducts();
  }

  @GetMapping("/tag/{tagname}")
  Tags productList(@PathVariable String tagname) {
    int id;
    try {
      id = Integer.parseInt(tagname);
    } catch (NumberFormatException nfe) {
      return tagService.getTagByTagName(tagname);
    }
    return tagService.getTagById(id);
  }

  @GetMapping("/tag")
  public List<Tags> getAllTags() {
    return tagService.getAllTags();
  }

  @GetMapping("/search/{param}")
  public List<Product> getProductsBySearch(@PathVariable String param) {
    List<Product> plist = productService.getProductsBySearch(param);
    try {
      plist.addAll(tagService.getTagByTagName(param).getProductList());
    } catch (NullPointerException npe) {
    }
    return plist;
  }

}
