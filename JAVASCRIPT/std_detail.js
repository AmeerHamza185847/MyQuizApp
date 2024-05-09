
let stdDatabase = JSON.parse(localStorage.getItem("studentData")) || [];

// let userScore = JSON.parse(localStorage.getItem("score")) || null;
let addStudent = (e) => {
    // e.preventDefault();
    let stdName = document.querySelector("#stdName").value;
    let stdRollNo = document.querySelector("#stdRollNo").value;
    let stdBath = document.querySelector("#stdBath").value;
    let stdSection = document.querySelector("#stdSection").value;

    let studentDetail = {
        stdName,
        stdRollNo,
        stdBath,
        stdSection,
        // score:score
    }
    stdDatabase.push(studentDetail)
    console.log("detail", studentDetail);
    console.log("database", stdDatabase);
    localStorage.setItem("studentData", JSON.stringify(stdDatabase));

}


let myForm = document.querySelector("#myForm");
myForm.addEventListener('submit', addStudent);


let gotoQuiz = () => {
    let newLocation = "./HTML/quiz.html";
    location.href = newLocation;
}

let quizbtn = document.querySelector("#quizbtn");
quizbtn.addEventListener('click',gotoQuiz);
