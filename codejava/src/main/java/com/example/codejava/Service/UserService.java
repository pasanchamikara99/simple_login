package com.example.codejava.Service;

import com.example.codejava.Repository.UserRepo;
import com.example.codejava.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;



    public User saveRetails(Map<String,String>requestMap){

        User user = userRepo.save(getUserFromMap(requestMap));
        return user;

    }


    private User getUserFromMap(Map<String,String> requestMap){

        User user = new User();
        user.setName(requestMap.get("name"));
        user.setGender(requestMap.get("gender"));
        user.setEmail(requestMap.get("email"));
        user.setPassword(requestMap.get("password"));

        return user;
    }


    public User loginUser(Map<String,String> requestMap){

        User user = userRepo.getUserByEmail(requestMap.get("email"));

        return user;
    }

    public List<User> getUsers(){

        return userRepo.findAll();
    }

    public User findUser(int id){
        return userRepo.findById(id);
    }

    public User deleteUser(int id){
        return userRepo.deleteById(id);
    }


    public User updateUser(Map<String,String>requestMap,User user){


        user.setName(requestMap.get("name"));
        user.setGender(requestMap.get("gender"));
        user.setEmail(requestMap.get("email"));
        user.setPassword(requestMap.get("password"));

        User updateUser = userRepo.save(user);

        return user;

    }



}
