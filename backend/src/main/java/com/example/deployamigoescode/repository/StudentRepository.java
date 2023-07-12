package com.example.deployamigoescode.repository;



import com.example.deployamigoescode.entity.StudentEnity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<StudentEnity,Long> {

}
