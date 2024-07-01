// students object
let student1 = {
    name : "A" , 
    id : "1",
    grade : "A+"
}
let student2 = {
    name : "B" , 
    id : "2",
    grade : "A+"
}
let student3 = {
    name : "C" , 
    id : "3",
    grade : "A+"
}
let student4 = {
    name : "D" , 
    id : "4",
    grade : "A+"
}
let student5 = {
    name : "E" , 
    id : "5",
    grade : "A+"
}
console.log (student1);
console.log (student2);
console.log (student3);
console.log (student4);
console.log (student5);

const grade1 = {
     subject1 : 93, 
     subject2 : 94 ,
     subject3 : 93
}
const grade2 = {
    subject1 : 97, 
    subject2 : 98 ,
    subject3 : 91
}
const grade3 = {
    subject1 : 90, 
    subject2 : 70 ,
    subject3 : 83
}
const grade4 = {
    subject1 : 80, 
    subject2 : 93 ,
    subject3 : 93
}

const grade5 = {
    subject1 : 93, 
    subject2 : 93 ,
    subject3 : 93
}

console.log (grade1);
console.log (grade2);
console.log (grade3);
console.log (grade4);
console.log (grade5);


function addStudent(id, name, grades) {
    const newStudent = new Student(id, name, grades);
    students.push(newStudent);
  }
  
  // Remove a Student
  function removeStudent(id) {
    students = students.filter(student => student.id !== id);
  }























