package dn.spring.tomato.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dn.spring.tomato.model.Tags;
import dn.spring.tomato.repository.TagsRepository;

@Service
public class TagService {
  @Autowired
  TagsRepository tagsRepository;

  public List<Tags> getAllTags() {
    return tagsRepository.findAll();
  }

  public Tags getTagByTagName(String tagname) {
    return tagsRepository.getProductsByTag(tagname).orElse(new Tags());
  }

  public Tags getTagById(int id) {
    return tagsRepository.getReferenceById(id);
  }
}
