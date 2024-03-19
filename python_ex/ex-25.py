class Student:
    def __init__(self, student_id, student_name):
        self.student_id = student_id
        self.student_name = student_name
    
    def get_student(self):
        print(f'{self.student_id} {self.student_name}')

student1 = Student(2019112163, '박창수')
student2 = Student(2019112164, '박창수2')

student1.get_student()
student2.get_student()

#2019112163 박창수