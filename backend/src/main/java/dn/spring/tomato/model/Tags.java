package dn.spring.tomato.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Tags {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  int id;

  @Column
  String tagname;

  @ManyToMany()
  @JoinTable(name = "product_tags", joinColumns = {
      @JoinColumn(name = "tag_id", referencedColumnName = "id") }, inverseJoinColumns = {
          @JoinColumn(name = "product_id", referencedColumnName = "id") })
  List<Product> products;

  public Tags(String tagname) {
    this.tagname = tagname;
  }

}
