package org.example.socialmediaanalytics.Repository;

import org.example.socialmediaanalytics.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

}
