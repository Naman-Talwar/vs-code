const questions = [
    {
        question: "Who invented C++?",
        answers: [
            { text: "Dennis Ritchie", correct: false },
            { text: "Ken Thompson", correct: false },
            { text: "Brian Kernighan", correct: false },
            { text: "Bjarne Stroustrup", correct: true },
        ]
    },
    {
        question: "What is C++?",
        answers: [
            { text: "C++ is an object oriented programming language", correct: false },
            { text: "C++ is a procedural programming language", correct: false },
            { text: "C++ supports both procedural and object oriented programming language", correct: true },
            { text: "C++ is a functional programming language", correct: false },
        ]
    },
    {
        question: "Which of the following is the correct identifier?",
        answers: [
            { text: "$var_name", correct: false },
            { text: "VAR_123", correct: true },
            { text: "varname@", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "Which of the following is not a type of Constructor in C++?",
        answers: [
            { text: "Default constructor", correct: false },
            { text: "Parameterized constructor", correct: false },
            { text: "Copy constructor", correct: false },
            { text: "Friend constructor", correct: true },
        ]
    },
    {
        question: "Which of the following approach is used by C++?",
        answers: [
            { text: "Left-right", correct: false },
            { text: "Right-left", correct: false },
            { text: "Bottom-up", correct: true },
            { text: "Top-down", correct: false },
        ]
    },
];

const questionElement = document.querySelector('#question');
const answerBtn = document.querySelector('#answer-btns'); 
const nextBtn = document.querySelector('#next-btn'); 

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtn.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while(answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play again";
    nextBtn.style.display = "block";
}

function handleNextBtn() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
});

startQuiz();