package com.example.GammaPrep.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.GammaPrep.entity.UserDetails;
import com.example.GammaPrep.repo.GammaPrepRepository;

@RestController
@RequestMapping("/gamma")
@CrossOrigin(origins = "http://localhost:3000")
public class GammaPrepController {
	
	@Autowired
	GammaPrepRepository repo;
	
	@PostMapping("/add")
	public void addUser(@RequestBody UserDetails user) {
		repo.save(user);
	}
	@GetMapping("/getall")
	public List<UserDetails> allUsers(){
		return repo.findAll();
		
	}
	@GetMapping("/login/{name}/{password}")
	public String validateUser(@PathVariable String name,@PathVariable String password){
		UserDetails user=repo.findByFullName(name);
		
		if(user.getFullName().equals(name) && user.getPassword().equals(password)) {
			return "exist";
		}
		else {
			return "null";
		}
		
	}

}
