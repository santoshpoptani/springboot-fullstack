package com.example.deployamigoescode.endpoints;


import com.example.deployamigoescode.entity.StudentEnity;
import com.example.deployamigoescode.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/student")
public class endpoints {
    private final StudentService studentService;

    public endpoints(StudentService studentService) {
        this.studentService = studentService;
    }


    @GetMapping
    public List<StudentEnity> getallstudents(){

        return studentService.getStudents();
    }

    @PostMapping
    public void savestudent(@RequestBody StudentEnity studentEnity){
        studentService.saveStudent(studentEnity);
    }
}
