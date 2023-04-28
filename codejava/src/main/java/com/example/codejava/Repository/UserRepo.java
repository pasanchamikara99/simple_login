package com.example.codejava.Repository;

import com.example.codejava.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepo extends JpaRepository<User,Integer> {

    User getUserByEmail(String email);

    List<User> findAll();

    User findById(int id);

    User deleteById(int id);

}
