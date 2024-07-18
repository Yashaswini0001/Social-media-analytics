package org.example.socialmediaanalytics.Controller;

import org.example.socialmediaanalytics.Model.Promotion;
import org.example.socialmediaanalytics.Services.PromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/promotion")
public class PromtionController {
@Autowired
    private PromotionService promotionService;
@GetMapping
public List<Promotion> getAllPromtions(){
    return promotionService.getAllPromtions();
}
    @GetMapping("/{userId}")
    public List<Promotion> getPromotionsByUserId(@PathVariable Long userId) {
        return promotionService.getPromotionsByUserId(userId);
    }
}
