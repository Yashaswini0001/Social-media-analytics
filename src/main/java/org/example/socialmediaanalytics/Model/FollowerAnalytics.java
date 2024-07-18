package org.example.socialmediaanalytics.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FollowerAnalytics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int numberOfFollowers;
    private int numberOfFollowing;
    private int accountsReached;
    private int accountsEngaged;
    @ManyToOne
    private User user;
}
