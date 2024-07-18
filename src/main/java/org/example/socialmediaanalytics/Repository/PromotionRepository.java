package org.example.socialmediaanalytics.Repository;

//import org.example.socialmediaanalytics.Model.Promtion;
import org.example.socialmediaanalytics.Model.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PromotionRepository extends JpaRepository<Promotion,Long> {
    List<Promotion> findByUserId(Long userId);
}
