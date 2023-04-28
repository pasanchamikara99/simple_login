package com.example.codejava.Controller;



import com.example.codejava.Service.UserService;
import com.example.codejava.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UseController {


    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public ResponseEntity<String> addUser(@RequestBody(required = true)Map<String,String> requestMap){
         User user = userService.saveRetails(requestMap);

         if(user != null){
             return new ResponseEntity<>("User Registration Sucessfull", HttpStatus.OK);
         }

        return new ResponseEntity<>("User Registration fail", HttpStatus.INTERNAL_SERVER_ERROR);

    }



    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody (required = true)Map<String,String> requestMap){


         User user = userService.loginUser(requestMap);


         if(user != null){

             if(user.getPassword().equals(requestMap.get("password"))){
                 return  new ResponseEntity<>("login Successful", HttpStatus.OK);
             }else{
                 return new ResponseEntity<>("Invalid User name or password", HttpStatus.BAD_REQUEST);
             }


         }else{
             return new ResponseEntity<>("Invalid login", HttpStatus.NOT_FOUND);
         }
    }

    @GetMapping("/getUsers")
    public ResponseEntity<List<User>> getUsers(){
        List<User> users = userService.getUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/getUser/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") int id){
        User user = userService.findUser(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }




    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") int id){

        User user = userService.findUser(id);

        if(user!=null){
            userService.deleteUser(id);
            return new ResponseEntity<>("Delete Successful ", HttpStatus.OK);
        }

        return new ResponseEntity<>("No user found ", HttpStatus.NOT_FOUND);
    }

    @PutMapping("/updateUser/{id}")
    public ResponseEntity<?> updateUser(@RequestBody (required = true)Map<String,String> requestMap,@PathVariable("id") int id){

        User user = userService.findUser(id);

        if(user != null){
            User updateUser = userService.updateUser(requestMap,user);
            return new ResponseEntity<>("Update Successful ", HttpStatus.OK);
        }

        return new ResponseEntity<>("no user found", HttpStatus.NOT_FOUND);
    }


}
