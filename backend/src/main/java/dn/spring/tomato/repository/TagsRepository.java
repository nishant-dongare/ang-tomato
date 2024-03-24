package dn.spring.tomato.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import dn.spring.tomato.model.Tags;

public interface TagsRepository extends JpaRepository<Tags, Integer> {

  @Query("SELECT t from dn.spring.tomato.model.Tags t WHERE t.tagname = ?1")
  Optional<Tags> getProductsByTag(String tagname);
}
