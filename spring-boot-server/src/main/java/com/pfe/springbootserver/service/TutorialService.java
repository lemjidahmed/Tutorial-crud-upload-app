package com.pfe.springbootserver.service;

import com.pfe.springbootserver.model.Tutorial;
import com.pfe.springbootserver.repository.TutorialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TutorialService {
    @Autowired
    TutorialRepository tutorialRepository;
    public List<Tutorial> getAllTutorials(){
        return tutorialRepository.findAll();
    }
    public List<Tutorial> getTutorialByTitle(String title) {
        return tutorialRepository.findByTitleContaining(title);
    }

    public List<Tutorial> getByPublished()
    {
        return tutorialRepository.findByPublished(true);
    }
    public Tutorial addTutorial(Tutorial tutorial) {
        tutorialRepository.save(tutorial);
        return tutorial;
    }
    public Tutorial updateTutorial(Tutorial tutorial) {
        tutorialRepository.save(tutorial);
        return tutorial;
    }

    public Optional<Tutorial> getTutorialById(long id) {
        return tutorialRepository.findById(id);
    }

    public void deleteById(long id) {
        tutorialRepository.deleteById(id);
    }

    public void deleteAllTutorials(){
        tutorialRepository.deleteAll();
    }


}
