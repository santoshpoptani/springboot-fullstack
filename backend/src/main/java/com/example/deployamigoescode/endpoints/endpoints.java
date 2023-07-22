package com.example.deployamigoescode.endpoints;


import com.example.deployamigoescode.entity.StudentEnity;
import com.example.deployamigoescode.service.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/student")
public class endpoints {
    private final StudentService studentService;

    public endpoints(StudentService studentService) {
        this.studentService = studentService;
    }


    @GetMapping
    public List<StudentEnity> getallstudents() {

        return studentService.getStudents();
    }

    @PostMapping
    public void savestudent(@RequestBody StudentEnity studentEnity) {
        studentService.saveStudent(studentEnity);
    }

    @DeleteMapping("{id}")
    public void deletestudent(@PathVariable("id") Integer id) {
        studentService.deleteStudent(id);
    }

    @PutMapping("{id}")
    public void updateStudent(
            @PathVariable("id") Integer id,
            @RequestBody StudentEnity studentEnity) {
        studentService.updateStudent(id,studentEnity);
    }

}
