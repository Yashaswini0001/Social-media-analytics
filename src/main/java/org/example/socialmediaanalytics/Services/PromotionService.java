package org.example.socialmediaanalytics.Services;

import jakarta.transaction.Transactional;
import org.example.socialmediaanalytics.Model.Promotion;
//import org.example.socialmediaanalytics.Model.Promtion;
import org.example.socialmediaanalytics.Repository.PromotionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class PromotionService {
@Autowired
    private PromotionRepository promotionRepository;
public List<Promotion> getAllPromtions(){
    return promotionRepository.findAll();
}

    public List<Promotion> getPromotionsByUserId(Long userId) {
        return promotionRepository.findByUserId(userId);
    }
}
