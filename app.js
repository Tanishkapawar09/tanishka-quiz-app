const questions =[
    {
        question :"Which is the fav drink of Tanishka?",
        answers : [
            {text: "Juice",correct:false},
            {text: "Coffee",correct:true},
            {text: "Tea",correct:false},
            {text: "Milkshake",correct:false},
        ]
    },
    {
        question :"What is my fav season?",
        answers : [
            {text: "Rainy",correct:false},
            {text: "Winter",correct:true},
            {text: "Summer",correct:false},
            {text: "Spring",correct:false},
        ]  
    },
    {
        question :"What is my fav food?",
        answers : [
            {text: "Biryani",correct:true},
            {text: "Pavbhaji",correct:false},
            {text: "MisalPav",correct:false},
            {text: "Butter Paneer",correct:false},
        ]   
    },
    {
        question :"What's a hobby ,I enjoyed in my free time?",
        answers : [
            {text: "Watching Movie",correct:false},
            {text: "Sleeping",correct:false},
            {text: "Eating",correct:true},
            {text: "Reading",correct:false}, 
        ]
    },
    {
        question :"What's a movie or Tv show I can watch over and over ?",
        answers : [
            {text: "Phulpakhru",correct:false},
            {text: "Yeh Un Dino Ki Baat Hai",correct:true},
            {text: "Hum sath sath hai",correct:false},
            {text: "Mitwa",correct:false}
        ] 
    }
];
const questionElement =document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestions();
};

function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex + 1;
    questionElement.innerHTML =questionNo +". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        
    });

function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    };
};
    

};

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset=== "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

 });
  nextButton.style.display = "block";
}
function showScore(){
    
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play again";
    nextButton.style.display ="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
