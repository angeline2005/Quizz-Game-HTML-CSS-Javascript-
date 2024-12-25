const questions = [
    {
        question: "Who is known as the Father of India?",
        choices: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh"],
        answer: "Mahatma Gandhi"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Who wrote the play Romeo and Juliet?",
        choices: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Homer"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["O2", "CO2", "H2O", "H2"],
        answer: "H2O"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        choices: ["China", "Japan", "Korea", "India"],
        answer: "Japan"
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0; 


function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;

    
    currentQuestion.choices.forEach((choice, index) => {
        const choiceElement = document.getElementById(`choice${index + 1}`);
        choiceElement.textContent = choice;
        choiceElement.onclick = () => checkAnswer(choice);
    });

    
    document.getElementById("quiz_container").style.display = "block";
    document.getElementById("score_container").style.display = "none";
}


function checkAnswer(selectedChoice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedChoice === correctAnswer) {
        correctAnswers++; 
        alert("Correct Answer!");
    } else {
        alert(`Wrong Answer! The correct answer was: ${correctAnswer}`);
    }
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        displayScore();
    }
}


function displayScore() {
    const quizContainer = document.getElementById("quiz_container");
    const scoreContainer = document.getElementById("score_container");

    
    quizContainer.style.display = "none";
    scoreContainer.style.display = "block";

    
    document.getElementById("score").textContent = `${correctAnswers} / ${questions.length}`;
}


function restartQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    loadQuestion();
}


loadQuestion();
