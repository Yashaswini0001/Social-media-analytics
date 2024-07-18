package org.example.socialmediaanalytics.Services;

import jakarta.transaction.Transactional;
import org.example.socialmediaanalytics.Model.PostAnalytics;
import org.example.socialmediaanalytics.Repository.PostAnalyticsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class PostAnalyticsService {

    @Autowired
    private PostAnalyticsRepository postAnalyticsRepository;

    public List<PostAnalytics> getAllPostAnalytics() {
        return postAnalyticsRepository.findAll();
    }

    public PostAnalytics getPostAnalyticsByUserId(Long userId) {
        return postAnalyticsRepository.findByUserId(userId);
    }
}
