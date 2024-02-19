const quizData = [
    {
        image: "/img/question1.webp",
        question: "Who won the UEFA Champions League in the 2017-18 season?",
        a: " Manchester City",
        b: "Real Madrid",
        c: "Liverpool",
        d: "Juventus",
        correct: "c",
    },
    {
        image: "/img/question2.jpg",
        question: "Which player won the Golden Boot award in the 2018 FIFA World Cup?",
        a: 'Lionel Messi',
        b: 'Neymar',
        c: 'Cristiano Ronaldo',
        d: 'Harry Kane',
        correct: "d",
    },
    {
        image: "/img/question3.avif",
        question: "Which of these clubs has won the most English Premier League titles?",
        a: "Manchester City",
        b: "Liverpool",
        c: "Manchester United",
        d: "Chelsea",
        correct: "c",
    },
    {
        image: "/img/question4.jpg",
        question: "Who won the Ballon d'Or award for the year 2020??",
        a: " Robert Lewandowski",
        b: "Lionel Messi",
        c: " Cristiano Ronaldo",
        d: " Neymar",
        correct: "a",
    },
    {
        image: "/img/question5.png",
        question: "What is the nickname of the Brazil national football team?",
        a: " La Celeste",
        b: " Les Bleus",
        c: "La Albiceleste",
        d: "Canarinho",
        correct: "d",
    },
    {
        image: "/img/question6.webp",
        question: "Which of these clubs has won the most UEFA Champions League titles??",
        a: " AC Milan",
        b: " Bayern Munich",
        c: "Real Madrid",
        d: "Liverpool",
        correct: "c",
    },
    {
        image: "/img/question7.webp",
        question: "Who is the all-time top scorer in the English Premier League?",
        a: " Thierry Henry",
        b: "Alan Shearer",
        c: " Wayne Rooney",
        d: " Sergio Agüero",
        correct: "b",
    },
    {
        image: "/img/question8.jpg",
        question: "Which country has won the most FIFA World Cup titles?",
        a: " Brazil",
        b: " Argentina",
        c: " Germany",
        d: " Italy",
        correct: "a",
    },
    {
        image: "/img/question9.jpg",
        question: "Which of these players has won the most UEFA Champions League titles?",
        a: " Cristiano Ronaldo",
        b: " Lionel Messi",
        c: " Andres Iniesta",
        d: "Clarence Seedorf",
        correct: "d",
    },
    {
        image: "/img/question10.avif",
        question: "Which club won the English Premier League in the 2019-20 season?",
        a: "Liverpool",
        b: "Manchester City",
        c: "Chelsea",
        d: "Manchester United",
        correct: "a",
    },

];

const quizContainer = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const imageEl = document.getElementById("image");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    imageEl.src = currentQuizData.image;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}


function getSelected() {
    for (let i = 0; i < answerEls.length; i++) {
        if (answerEls[i].checked) {
            return answerEls[i].id;
        }
    }
    return undefined;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});