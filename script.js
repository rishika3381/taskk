// Step 1: Create Student Objects
class Student {
    constructor(id, name, grades) {
        this.id = id;
        this.name = name;
        this.grades = grades; // Object with subjects as keys and grades as values
    }
}

// Step 2: Store Students in an Array
let students = [];

// Step 3: Functions

// Function to add a new student
function addStudent(id, name, grades) {
    const newStudent = new Student(id, name, grades);
    students.push(newStudent);
}

// Function to remove a student by their id
function removeStudent(id) {
    students = students.filter(student => student.id !== id);
}

// Example Usage
addStudent(1, 'Alice', { Math: 90, English: 85 });
addStudent(2, 'Bob', { Math: 75, English: 80 });

console.log(students);

removeStudent(1);

console.log(students);
