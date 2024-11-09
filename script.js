// script.js

const questions = [
    { question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Module", "Data Object Model", "Document Oriented Module"], correct: 0 },
    { question: "Which of these is a JavaScript framework?", options: ["React", "HTML", "CSS", "SQL"], correct: 0 },
    { question: "Which operator is used to assign a value?", options: ["=", "==", "===", "!="], correct: 0 }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const homepage = document.getElementById("homepage");
  const quizContainer = document.getElementById("quizContainer");
  const resultContainer = document.getElementById("resultContainer");
  const questionText = document.getElementById("questionText");
  const optionsContainer = document.getElementById("optionsContainer");
  const nextBtn = document.getElementById("nextBtn");
  const scoreText = document.getElementById("scoreText");
  const restartBtn = document.getElementById("restartBtn");
  
  document.getElementById("startQuizBtn").addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", nextQuestion);
  restartBtn.addEventListener("click", restartQuiz);
  
  function startQuiz() {
    homepage.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion();
  }
  
  function showQuestion() {
    questionText.innerText = questions[currentQuestion].question;
    optionsContainer.innerHTML = "";
  
    questions[currentQuestion].options.forEach((option, index) => {
      const optionDiv = document.createElement("div");
      optionDiv.classList.add("option");
      optionDiv.innerText = option;
      optionDiv.addEventListener("click", () => selectAnswer(index, optionDiv));
      // console.log(optionDiv);
      
      optionsContainer.appendChild(optionDiv);
    });
  
    nextBtn.style.display = "none";
  }
  
  function selectAnswer(selectedIndex, selectedDiv) {
    const isCorrect = selectedIndex === questions[currentQuestion].correct;
    
    if (isCorrect) {
      score++;
      selectedDiv.classList.add("correct");
    } else {
      selectedDiv.classList.add("incorrect");
    }
  
    console.log(optionsContainer.childNodes);
    
    // Disable other options
    Array.from(optionsContainer.children).forEach(option => option.style.pointerEvents = "none");
  
    nextBtn.style.display = "block"; // Show 'Next' button after answering
  }
  
  function nextQuestion() {
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreText.innerText = `You scored ${score} out of ${questions.length}`;
  
    // Customize feedback message based on score
    if (score === questions.length) {
      scoreText.innerText += "\nExcellent! You got everything right!";
    } else if (score > questions.length / 2) {
      scoreText.innerText += "\nGreat job! Keep practicing.";
    } else {
      scoreText.innerText += "\nGood effort! Try again to improve.";
    }
  }
  
  function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    resultContainer.style.display = "none";
    homepage.style.display = "block";
  }
  