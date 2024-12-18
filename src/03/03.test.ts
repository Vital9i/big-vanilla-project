import { StudentType } from "../02/02"
import { addSkill, doesStudentLiveIn, makeStudentActive } from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: 'Dimych',
        age: 32,
        isActive: false,
        address: {
            streetTitle: 'syrganova 2',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'REACT'
            },
        ]
    }
})

test('new techskill should be added to student', () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, 'js');

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('js');
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);
    
})

