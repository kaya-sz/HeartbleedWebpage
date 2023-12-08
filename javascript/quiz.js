const questions = [
    {
        id: 1,
        text: "Why shouldn't you implement SSL/TLS by hand?",
        options: ["You should implement it by hand to make sure it's done correctly.", "It can't be implemented by hand.", "It's complicated, and could pose a security threat if done wrong.", "It's proprietary and only the SSL/TLS company knows how to implement it."],
        correctAnswer: "It's complicated, and could pose a security threat if done wrong.",

    },
    {
      id: 2,
      text: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars",
    },
    {
      id: 3,
      text: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    }
    
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function startQuiz() {
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    showQuestion();
  }
  
  function showQuestion() {
    const questionContainer = document.getElementById("question-container");
  
    questionContainer.innerHTML = "";
  
    const question = questions[currentQuestion];
  
    const questionText = document.createElement("div");
    questionText.textContent = question.text;
  
    questionContainer.appendChild(questionText);
  
    // Add a line break after the question text
    questionContainer.appendChild(document.createElement("br"));
  
    for (const option of question.options) {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "option-checkbox";
      checkbox.id = `option-${option}`;
      checkbox.value = option;
  
      const label = document.createElement("label");
      label.textContent = option;
      label.htmlFor = `option-${option}`;
  
      const optionCheckbox = document.createElement("div");
      optionCheckbox.className = "question-checkbox";
      optionCheckbox.appendChild(checkbox);
      optionCheckbox.appendChild(label);
  
      questionContainer.appendChild(optionCheckbox);
    }
  }
  
  function nextQuestion() {
    const selectedAnswers = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);
    const correctAnswers = questions[currentQuestion].options.filter(option => questions[currentQuestion].correctAnswer.includes(option));
  
    if (arraysEqual(selectedAnswers, correctAnswers)) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    document.getElementById("quiz-container").style.display = "none";
  
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.style.display = "block";
  
    const percentage = (score / questions.length) * 100;
  
    if (score / questions.length >= 0.9) {
        const scoreElement = document.getElementById("score");
      scoreElement.innerHTML = `Congratulations, you passed! <br><br>You scored ${score} out of ${questions.length} questions.`;
    } else {
        const scoreElement = document.getElementById("score");
        scoreElement.innerHTML = `You scored ${score} out of ${questions.length} questions. <br><br>Score above 90% to pass!`
    }
  
    const resultsHeader = document.getElementById("results-header");
    resultsHeader.style.display = "block";
  }
  
  // Helper function to check if two arrays are equal
  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }