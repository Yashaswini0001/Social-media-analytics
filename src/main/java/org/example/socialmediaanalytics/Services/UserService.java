package org.example.socialmediaanalytics.Services;

import jakarta.transaction.Transactional;
import org.example.socialmediaanalytics.Model.User;
import org.example.socialmediaanalytics.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class UserService {
@Autowired
private UserRepository userRepository;
public List<User> getAllUsers(){
    return userRepository.findAll();
}
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}

