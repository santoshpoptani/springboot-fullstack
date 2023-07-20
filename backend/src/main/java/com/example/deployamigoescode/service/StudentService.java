package com.example.deployamigoescode.service;



import com.example.deployamigoescode.entity.StudentEnity;
import com.example.deployamigoescode.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public List<StudentEnity> getStudents() {
        return repository.findAll();
    }

    public Optional<StudentEnity> getStudent(long id) {
       return repository.findById(id);
    }

    public void saveStudent(StudentEnity studentEnity){
        repository.save(studentEnity);
    }
    public void deleteStudent(long id){
        repository.deleteById(id);
    }

    public void updateStudent(long id,StudentEnity studentEnity){
        StudentEnity stu = repository.findById(id).get();
        stu.setAge(studentEnity.getAge());
        stu.setName(studentEnity.getName());
        repository.save(stu);
    }
}
