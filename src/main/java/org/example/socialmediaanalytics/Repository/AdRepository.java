package org.example.socialmediaanalytics.Repository;

import org.example.socialmediaanalytics.Model.Ad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdRepository extends JpaRepository<Ad,Long> {
    List<Ad> findByUserId(Long userId);
}
