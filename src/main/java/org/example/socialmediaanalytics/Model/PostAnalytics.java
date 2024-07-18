package org.example.socialmediaanalytics.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
    @Table(name = "post_analytics")
    public class PostAnalytics {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private int totalComments;

        private int totalPosts;

        private int totalSaves;

        private int totalShares;


        private int totalStories;
    @ManyToOne

    private User user;

}
