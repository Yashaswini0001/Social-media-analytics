package org.example.socialmediaanalytics.Services;


import jakarta.transaction.Transactional;
import org.example.socialmediaanalytics.Model.FollowerAnalytics;
import org.example.socialmediaanalytics.Repository.FollowerAnalyticsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class FollowerAnalyticsService {

    @Autowired
    private FollowerAnalyticsRepository followerAnalyticsRepository;

    public List<FollowerAnalytics> getAllFollowerAnalytics() {
        return followerAnalyticsRepository.findAll();
    }

    public FollowerAnalytics getFollowerAnalyticsByUserId(Long userId) {
        return followerAnalyticsRepository.findByUserId(userId);
    }
}

