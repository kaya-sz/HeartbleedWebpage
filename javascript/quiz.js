const questions = [
    {
        id: 1,
        text: "Why shouldn't you implement SSL/TLS by hand?",
        options: ["You should implement it by hand to make sure it's done correctly.", "It can't be implemented by hand.", "It's complicated, and could pose a security threat if done wrong.", "It's proprietary and only the SSL/TLS company knows how to implement it."],
        correctAnswer: "It's complicated, and could pose a security threat if done wrong.",

    },
    {
      id: 2,
      text: "Heartbleed is a historical vulnerability, not really found in the wild.",
      options: ["True", "False"],
      correctAnswer: "False",
    },
    {
      id: 3,
      text: "Which one of these commands can fix heartbleed?",
      options: ["sudo apt update && sudo apt upgrade", "sudo apt install openssl -heartbleed_fix", "sudo apt install --only-upgrade openssl", "sudo apt install heartbleed-patch"],
      correctAnswer: "sudo apt install --only-upgrade openssl",
    },
    {
        id: 4,
        text: "What type of vulnerability is heartbleed?",
        options: ["Buffer overflow", "SQL Injection", "Cross Site Scripting", "Directory Traversal"],
        correctAnswer: "Buffer overflow",
      },
      {
        id: 5,
        text: "What is the first step of the TLS handshake?",
        options: ["Client hello", "Server hello", "Server authentication", "Creating a SSL certificate"],
        correctAnswer: "Client hello",
      },
      {
        id: 6,
        text: "Why is heartbleed hard to get rid of?",
        options: ["It's a really complicated attack with an in depth fix.", "No one knows how it works yet.", "It's so pervasive in different technologies, it's hard to tell which ones have been updated/can be updated.", "It's constantly copying itself, so it will eventually come back around."],
        correctAnswer: "It's so pervasive in different technologies, it's hard to tell which ones have been updated/can be updated.",
      },
      {
        id: 7,
        text: "What's the main problem in OpenSSL that heartbleed took advantage of?",
        options: ["Exposed credentials.", "Attackers are able to execute commands in the website URLs and travel backwards into the system.", "Open port 734 let the attackers 'bleed' plaintext information from the servers.", "The length of the heartbeat request isn't verified."],
        correctAnswer: "The length of the heartbeat request isn't verified.",
      },
      {
        id: 8,
        text: "How could OpenSSL fix this issue?",
        options: ["Encrypt the exposed credentials.", "White list user inputs so attackers can't just execute any commands in the URLs.", "Close port 734.", "Verify the length of messages being sent."],
        correctAnswer: "Verify the length of messages being sent.",
      },
      {
        id: 9,
        text: "What is an option to detect heartbleed on a public server?",
        options: ["Check the server in Qualys.", "Check the server's Github for an open issue regarding heartbleed.", "Run openssl version in the terminal.", "Check the NIST database."],
        correctAnswer: "Check the server in Qualys",
      },
      {
        id: 10,
        text: "What is an option to detect heartbleed on a private server?",
        options: ["Nothing, you can't", "Qualys", "DomSignal", "Run the openssl version command"],
        correctAnswer: "Run the openssl version command",
      },
    
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