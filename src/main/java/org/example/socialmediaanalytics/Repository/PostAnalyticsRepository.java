package org.example.socialmediaanalytics.Repository;

import org.example.socialmediaanalytics.Model.PostAnalytics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostAnalyticsRepository extends JpaRepository<PostAnalytics,Long> {
PostAnalytics  findByUserId(Long userId);
}

