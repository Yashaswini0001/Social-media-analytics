package org.example.socialmediaanalytics.Controller;

import org.example.socialmediaanalytics.Model.Ad;
import org.example.socialmediaanalytics.Services.AdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ads")
public class AdController {
@Autowired
    private AdService adService;
    @GetMapping
public List<Ad> getAllAds(){
    return adService.getAllAds();
}
    @GetMapping("/{userId}")
    public List<Ad> getAdsByUserId(@PathVariable Long userId) {
        return adService.getAdsByUserId(userId);
    }
}
