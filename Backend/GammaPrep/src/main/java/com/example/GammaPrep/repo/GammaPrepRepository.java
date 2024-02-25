package com.example.GammaPrep.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.example.GammaPrep.entity.UserDetails;

@Repository
public interface GammaPrepRepository extends JpaRepository<UserDetails,Integer>{

	UserDetails findByFullName(String name);

}
