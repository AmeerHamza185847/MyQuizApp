let questions = [
    {
        qustionTitle: "HTML stands for",
        option1: "HyperText Markup",
        option2: "HyperText Markup Level",
        option3: "HyperText Markup Language",
        correctAnswer: "HyperText Markup Language",

    },
    {
        qustionTitle: "HTML is used to create",
        option1: "Design of a web page",
        option2: "Structure of a web page",
        option3: "Functionality of a web page",
        correctAnswer: "Structure of a web page",

    },
    {
        qustionTitle: "Which tag is used to create important text",
        option1: "<strong></strong>",
        option2: "<important></important>",
        option3: "<em></em>",
        correctAnswer: "<strong></strong>",

    },
    {
        qustionTitle: "Which HTML tag is used to create a large text",
        option1: "<h1></h1>",
        option2: "<b></b>",
        option3: "<h6></h6>",
        correctAnswer: "<h1></h1>",

    },
    {
        qustionTitle: "Which one is correct",
        option1: "<a src='path'>Next</a>",
        option2: "<a href='path'>Google</a>",
        option3: "<a target='path'>Next</a>",
        correctAnswer: "<a href='path'>Google</a>",

    },
    {
        qustionTitle: "Which one is block level element",
        option1: "<span></span>",
        option2: "<img />",
        option3: "<div></div>",
        correctAnswer: "<div></div>",

    },
    {
        qustionTitle: "Which format is mostly used in a web page",
        option1: "GIP",
        option2: "JPEG",
        option3: "PNG",
        correctAnswer: "JPEG",

    },
    {
        qustionTitle: "Which one is used for multiple option",
        option1: "radio",
        option2: "select",
        option3: "option",
        correctAnswer: "select",

    },
    {
        qustionTitle: "Which tag is used to get data from user",
        option1: "Get",
        option2: "<form></form>",
        option3: "<textarea></textarea>",
        correctAnswer: "<form></form>",

    },
    {
        qustionTitle: "Which one is the correct syntax",
        option1: "<a href='mail_to:jon@example.org'>Email Jon</a>",
        option2: "<a href='Emailto:jon@example.org'>Email Jon</a>",
        option3: "<a href='mailto:jon@example.org'>Email Jon</a>",
        correctAnswer: "<a href='mailto:jon@example.org'>Email Jon</a>",

    },
]


let title = document.getElementById("title");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let index = -1;
let nextBtn = document.getElementById("next");
let score = 0;

// let timerIndex = 0;

// Note: important
// we use min and sec in nextQuestion() method to start it again when a user click on next button
// rather than starting from the existing state

let sec = 59;


let nextQuestion = () => {

    sec = 59;

    let options = document.getElementsByName('answer');
    for (let i = 0; i < options.length; i++) {

        if (options[i].checked) {
            let optValue = options[i].value;
            // console.log("optValue" , optValue);

            let userAnswer = questions[index][`option${optValue}`];
            // console.log("userAnswer" , userAnswer);

            let correctAnswer = questions[index].correctAnswer
            // console.log(questions[index][`option${optValue}`]);
            // console.log(questions[index].correctAnswer);

            if (userAnswer === correctAnswer) {
                score++;
            }

        }
        options[i].checked = false;
        nextBtn.disabled = true;

    }

    if (index > questions.length - 2) {
        // alert(`
        // Your sore is ${score}
        // percentage = ${(score / questions.length) * 100}%`);
        Swal.fire({
            title: "Good job!",
            text: `
            Your scroe is ${score}
            Percentage is ${(score / questions.length) * 100}`,
            icon: "success"
            
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirect to another page
                window.location.href = "../HTML/result.html";
            }
        });;

        localStorage.setItem("score", JSON.stringify(score));
        
        clearInterval(totalTime);

    }
    else {
        index++;
        title.innerHTML = questions[index].qustionTitle;
        option1.innerText = questions[index].option1;
        option2.innerText = questions[index].option2;
        option3.innerText = questions[index].option3;
    }


}
nextQuestion();


nextBtn.addEventListener('click', nextQuestion);


let enableNextButton = () => {
    nextBtn.disabled = false;
}


/* coding for timer setting */


let timquestionTimerer = document.querySelector("#questionTimer");

let totalTime = setInterval(() => {
    questionTimer.innerHTML = ` ${sec}`;
    sec--;
    if (sec < 0) {
        nextQuestion();
    }

}, 1000);





