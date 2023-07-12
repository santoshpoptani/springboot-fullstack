package com.example.deployamigoescode.service;

import com.example.deployamigoescode.entity.StudentEnity;
import com.example.deployamigoescode.repository.StudentRepository;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class StudentServiceTest {
    private StudentService underTest;
    private AutoCloseable autoCloseable;
    @Mock
    private StudentRepository repository;

    @BeforeEach
    void setUp() {
        underTest = new StudentService(repository);
    }


    @Test
    void getStudents() {
        //WHEN
        underTest.getStudents();

        //THEN
        verify(repository)
                .findAll();
    }

    @Test
    void saveStudent() {
        //GIVEN
        StudentEnity studentEnity = new StudentEnity(1,"san",20);
        //WHEN
        underTest.saveStudent(studentEnity);
        //THEN
        verify(repository).save(studentEnity);
    }
}