const quizData = [
    {
        question: "what is the full form of CSS",
        a: "computer science social",
        b: "cascading style sheets",
        c: "cascading sheets style",
        d: "computer social science ",
        correct: "b"
    },
    {
        question: "what is the full form of HTML",
        a: "Hyper text Markup Laguage",
        b: "Hyper text Markup letter",
        c: "Hyper text Make Laguage",
        d: "Hyper text Made Laguage",
        correct: "a"
    }
    ,
    {
        question: "what is the full form of DOM",
        a: "Demo Organization Model",
        b: "Do Or Moon",
        c: "Document Object Model",
        d: "None of the Above",
        correct: "c"
    },
    {
        question: "whch year JAVASCRIPT launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the Above",
        correct: "c"
    },
    {
        question: "what is the best css lib used in our frontend project",
        a: "Tailwind",
        b: "Grid",
        c: "Bootstrap",
        d: "Flex",
        correct: "a"
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");


const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// load the first quiz question
loadQuiz();

function loadQuiz() {
    // deselect any selected answer
    deselectAnswer()

    // get the current quia data(question and answer)
    const currentQuizData = quizData[currentQuiz];

    // set the question text
    questionEl.innerHTML = currentQuizData.question;

    // set the answer texts
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

// function to deselect all answer options
function deselectAnswer() {
    // iterate over each answer elemet and uncheck it
    answerEls.forEach(answerEl => {
        answerEl.checked = false
    })
}

// function to get the selected answer
function getSelected() {
    let answer;

    // iterate over each answer elemet
    answerEls.forEach(answerEl => {
        // check if the answer is selected (checked)
        if (answerEl.checked) {
            answer = answerEl.id;  // store the selected answer's id
        }
    })
    return answer;   // return the selected answer
}


// add the click event listener to the submit button
submitBtn.addEventListener("click", () => {
    // get the selected answer
    const answer = getSelected();

    // check if the answer was selected
    if (answer) {
        // check if the selected answer is correct
        if (answer === quizData[currentQuiz].correct) {
            // increment the score if the answer is correct
            score++;
        }

        // move to there are more questions
        currentQuiz++

        // check if thre are more question
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // if no mre questions, display the final score and a related button
            quiz.innerHTML = `
            <h2>You answer ${score} / ${quizData.length} questions correctly</h2>
            <button onclick = "location.reload()">Reload</button>
            `
        }
    }
})