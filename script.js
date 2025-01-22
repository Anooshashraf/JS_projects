const questions = [
    {
        question :  "Thomas Elva Edison invented?" ,
        answer : [
            {text:"pipe", correct: false},
            {text:"Bulb", correct: true},
            {text:"Electricity", correct: false},
            {text:"Magnets", correct: false}
        ]
    },
    {
        question : "Name the process by which plants prepare food?",
        answer : [
            {text:"glucolysis", correct: false},
            {text:"photosynthesis", correct: true},
            {text:"haber bosh process", correct: false},
            {text:"Caster kelner's Cycle", correct: false}
        ]
    },
    {
        question : "What is the largest lake in the world?",
        answer : [
            {text:"Caspian Sea", correct: false},
            {text:"Baikal", correct: true},
            {text:"Lake Superior", correct: false},
            {text:"Ontario", correct: false}
        ]
    }
    ,
    {
        question : "Which planet in the solar system is known as the “Red Planet?",
        answer : [
            {text:"venus", correct: false},
            {text:"Earth", correct: false},
            {text:"Mars", correct: true},
            {text:"jupiter", correct: false}
        ]
    }
    ,
    {
        question : " Which gas is used to extinguish fires",
        answer : [
            {text:"oxygen", correct: false},
            {text:"Carbon-di-oxide", correct: false},
            {text:"hydrogen", correct: false},
            {text:"nitrogen", correct: true}
        ]
    }  ,
    {
        question : "What animal is the national symbol of Australia?",
        answer : [
            {text:"kangroo", correct: true},
            {text:"koala", correct: false},
            {text:"lion", correct: false},
            {text:"crocodile", correct: false}
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("Next-button");

let current_Question_Index = 0;
let score = 0;

function startquiz(){
    current_Question_Index = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    ShowQuestion();
};

function ShowQuestion(){
    resetState();
    let current_Question = questions[current_Question_Index];
    let QuestionNo = current_Question_Index + 1;
    questionElement.innerHTML = QuestionNo + " . " + current_Question.question;
    
    current_Question.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        };
        button.addEventListener("click", selectAnswer);
    });
};

function resetState(){
    nextButton.style.display  = 'none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);

    };
};

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    };
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct==="true"){
            button.classList.add("correct");
        };
        button.disabled = true;
    });
    nextButton.style.display = "block";
};

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
};

function handleNextButton(){
    current_Question_Index++;
    if(current_Question_Index < questions.length){
        ShowQuestion();
    }else{
        showScore();
    };
};

nextButton.addEventListener("click",()=>{
    if(current_Question_Index < questions.length){
        handleNextButton();
    }else{
        startquiz();
    };
});

startquiz();