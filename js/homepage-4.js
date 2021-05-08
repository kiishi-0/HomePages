let studentSelect = document.getElementById('students');
let studentOption;
const studentInfo = document.getElementById('info');
let selectionBox = document.getElementById('studentSelect')
const studentObj = {
    'default':{
        name:'',
        age:20,
        birthday: '11-04-2001',
        course: 'Computer Science'
    },
    'student_1':{
        name:'Anita benga',
        age:20,
        birthday: '11-04-2001',
        course: 'Computer Science'
    },
    student_2:{
        name:'Samuel oluwole',
        age:19,
        birthday: '14-03-2002',
        course: 'Business Administration'
    },
    student_3:{
        name:'Nneka Uzoma',
        age:20,
        birthday: '05-07-2001',
        course: 'Accounting'
    },
    student_4:{
        name:'Niniola James',
        age:19,
        birthday: '21-11-2002',
        course: 'Medical Scences'
    },
    student_5:{
        name:'Joshua Izeng',
        age:20,
        birthday: '15-05-2001',
        course: 'Law'
    }
};
const insertStudents = () =>{
    // console.log(studentObj.student_1.name, studentObj);
    let std;
    for(std in studentObj){
        // console.log(std)
        studentOption = document.createElement('option');
        studentOption.innerText=studentObj[std].name;
        studentSelect.appendChild(studentOption);
    }
}
document.onload = insertStudents();
document.onload = studentInfo.hidden = true; 

const selectedStudent = std =>{
    studentInfo.hidden = true;
    selectionBox.hidden = true;
    console.log(std.value)

    for(let stud in studentObj){
        console.log(std.value)

        if(Object.keys(studentObj[stud]).includes(std.value)){
            let paragraph = document.createElement('p');
            console.log(paragraph)
            paragraph.innerText = studentInfo[stud].name;
            studentInfo.appendChild(paragraph);
        }
        else{
            console.log('sorry')
        }
    }
}
