package org.example.socialmediaanalytics.Controller;

import org.example.socialmediaanalytics.Model.FollowerAnalytics;
import org.example.socialmediaanalytics.Services.FollowerAnalyticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/follower-analytics")
public class FollowerAnalyticsController {
    @Autowired
    private FollowerAnalyticsService followerAnalyticsService;

    @GetMapping("/{userId}")
    public FollowerAnalytics getFollowerAnalyticsByUserId(@PathVariable Long userId) {
        return followerAnalyticsService.getFollowerAnalyticsByUserId(userId);
    }

}
