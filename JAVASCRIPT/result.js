


let stdDatabase = JSON.parse(localStorage.getItem("studentData")) || [];
console.log("database :", stdDatabase);

// let userScore = JSON.parse(localStorage.getItem("score"));

let lastIndex = stdDatabase.length - 1;

// for (let i = 0; i < stdDatabase.length; i++) {
//     console.log("data", stdDatabase[i]);
// }

let lastUser = stdDatabase[lastIndex];
// console.log("last User :" , lastUser);


// user data

(() => {
   if(stdDatabase.length > 0){
    let myName = document.querySelector(".myName");
    let myRollNo = document.querySelector(".myRollNo");
    let myBatch = document.querySelector(".myBatch");
    let mySection = document.querySelector(".mySection");
    // let myScore = document.querySelector(".myScore");

    myName.innerText = lastUser.stdName;
    myRollNo.innerText = lastUser.stdRollNo;
    myBatch.innerText = lastUser.stdBath;
    mySection.innerText = lastUser.stdSection;
    // myScore.innerText = userScore;
    console.log("This function is also called immediately!");
   }
   else{
    alert("database is empty")
   }
})();