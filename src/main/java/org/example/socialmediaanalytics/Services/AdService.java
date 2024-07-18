package org.example.socialmediaanalytics.Services;

import jakarta.transaction.Transactional;
import org.example.socialmediaanalytics.Model.Ad;
import org.example.socialmediaanalytics.Repository.AdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class AdService {
@Autowired
    private AdRepository adRepository;
public List<Ad> getAllAds(){
    return adRepository.findAll();
}

    public List<Ad> getAdsByUserId(Long userId) {
        return adRepository.findByUserId(userId);
    }
}
