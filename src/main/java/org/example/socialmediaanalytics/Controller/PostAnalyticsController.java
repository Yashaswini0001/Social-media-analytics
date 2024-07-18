package org.example.socialmediaanalytics.Controller;

import org.example.socialmediaanalytics.Model.PostAnalytics;
import org.example.socialmediaanalytics.Services.PostAnalyticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/post-analytics")
public class PostAnalyticsController {
@Autowired
    private PostAnalyticsService postAnalyticsService;
@GetMapping
public List<PostAnalytics> getAllPostAnalytics(){
    return postAnalyticsService.getAllPostAnalytics();
}
    @GetMapping("/{userId}")
    public PostAnalytics getPostAnalyticsByUserId(@PathVariable Long userId) {
        return postAnalyticsService.getPostAnalyticsByUserId(userId);
    }
}
