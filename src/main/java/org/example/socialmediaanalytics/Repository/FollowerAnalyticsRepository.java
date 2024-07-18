package org.example.socialmediaanalytics.Repository;

import org.example.socialmediaanalytics.Model.FollowerAnalytics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FollowerAnalyticsRepository extends JpaRepository<FollowerAnalytics,Long> {
    FollowerAnalytics findByUserId(Long userId);
}
