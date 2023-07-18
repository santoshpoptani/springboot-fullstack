package com.example.deployamigoescode.entity;

import com.example.deployamigoescode.Gender;
import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "Student")
@Table(name = "student")
public class StudentEnity {

    @Id
    @SequenceGenerator(
            name = "student_id_seq",
            sequenceName = "student_id_seq",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "student_id_seq")
    private long id;
    @Column(
            nullable = false
    )
    private String Name;
    @Column(
            nullable = false
    )
    private int age;

    @Column(
            nullable = false
    )
    @Enumerated(EnumType.STRING)
    private Gender gender;

    public StudentEnity(String name, int age, Gender gender) {
        Name = name;
        this.age = age;
        this.gender = gender;
    }
}
