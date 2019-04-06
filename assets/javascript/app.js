var questions = [{
    question: "In 1924 there was a massive, 3 day, street brawl betweeen the Ku Klux Clan and what American university?",
    answer: "Notre Dame",
    choices: ["University of Chicago", "Notre Dame", "University of Virginia", "Harvard"],
    userAnswer: ""
  },
  {
    question: "Arguably the greatest pitcher in baseball history was George Edward 'Rube' Waddell, what was his career during the offseason?",
    answer: "Alligator wrestler",
    choices: ["Butcher", "Firefighter", "Alligator Wrestler", "Tailor"],
    userAnswer: ""
  },
  {
    question: "The legends of vampires in the U.S. were most largely concentrated in the North-East, specifically New England, with the most recent 'vampire slaying' taking place as recently as the 1890's. While vampires aren't real, we now know that what was believed to be the effects of vampires was really what disease?",
    answer: "Tuberculosis",
    choices: ["Measles", "The Black Plague", "The flu", "Tuberculosis"],
    userAnswer: "",
  },
  {
    question: "John McCain was involved in the destruction of how many planes during his career as a pilot?",
    answer: "4",
    choices: ["1", "2", "3", "4"],
    userAnswer: ""
  }
];


var answer = ["Notre Dame", "Alligator Wrestler", "Tuberculosis", "4"];



// button to begin quiz, display questions and begin timer
function jsStartButton() {
  var buttonStartDiv = $("<div>");
  var startButton = $("<button>");
  startButton.text("Begin the quiz! You have 60 seconds!")
  startButton.addClass('btn btn-info')
  startButton.attr('id', 'startButtonHTML')
  buttonStartDiv.append(startButton);
  $("#quizForm").append(startButton);
  $('#startButtonHTML').on("click", function (event) {
    event.preventDefault();
    displayQuestions();
    var counter = 60;
    var countDown = setInterval(function () {
      counter--;
      // this should cause the time to display to the page just under the h1 but I cannot for the life of me figure out why it's not appearing
      var counterDivHTML = $('<div>');
      var counterPHTML = $('<p>');
      counterPHTML.text(counter);
      counterDivHTML.append(counterPHTML);
      $("quizForm").append(counterDivHTML);
      if (counter == 0) {
        clearInterval(countDown);
        //this should reset the page but it keep erroring and saying it's not defined
        reset()
      }
    }, 1000);

  })
};
jsStartButton();

// function to make the questions appear
function displayQuestions() {
  var userAnswer = [];

  $("#quizForm").empty();
  questions.forEach(function (question, index) {
    var questionJS = $("<div>").addClass("form-group");
    var $label = $("<h4>")
      .text(question.question)
    $label.appendTo(questionJS);
    question.choices = question.choices.sort(function () {
      return .5 - Math.random();
    });
    // make the choice buttons
    for (var i = 0; i < question.choices.length; i++) {
      var choiceJS = $('<div>');
      choiceJS.addClass('form-check form-check-inline');
      var $radio = $('<input>');
      $radio.attr({

          value: question.choices[i],
          type: "radio",
          name: index[i],
          class: "form-check-input"
        })
        // add the options to the page
        .appendTo(choiceJS);
      var $choiceLabel = $('<label>');
      $choiceLabel.text(question.choices[i])
        .addClass("form-check-label")
        .appendTo(choiceJS);
      choiceJS.appendTo(questionJS);
    }

    $("#quizForm").append(questionJS);

  });

  // register user input, not entirely sure on how to stop users from picking more than one option per question yet
  $("#quizForm").on("change", ".form-check-input", function () {
    var userInput = $(this).val();
    console.log(userInput);
    userAnswer.push(userInput);
  });


  // add correct variable
  var correct = 0;


  //add reset function here
  function reset() {
    displayQuestions();

  };
  // create submit button
  function addSubmit() {
    var buttonDivJS = $('<div>');
    var submitButtonJS = $('<button>');
    submitButtonJS.addClass('btn btn-info');
    submitButtonJS.attr('id', 'submitButtonHTML');
    submitButtonJS.text('Submit');
    (buttonDivJS).append(submitButtonJS);
    $("#quizForm").append(buttonDivJS);

    // add submit button function
    $('#submitButtonHTML').on("click", function (event) {
      event.preventDefault();

      for (var i = 0; i < answer.length; i++) {

        if (answer[i] === userAnswer[i]) {

          correct++;

        }
      }

      alert(`You got ${correct} questions correct!`)
      reset();
    });
  }

  //  actually add the submit button
  addSubmit();
}