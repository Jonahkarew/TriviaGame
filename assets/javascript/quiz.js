$(document).ready(function(){

var questions = [
  {
    question: "In 1924 there was a massive, 3 day, street brawl betweeen the Ku Klux Clan and what American university?",
    answer: "Notre Dame",
    choices: ["University of Chicago", "Notre Dame", "University of Virginia", "Harvard"],
    userAnswer: ""
  },
  {
    question: "Arguably the greatest pitcher in baseball history was George Edward 'Rube' Waddell, what was his career during the offseason?",
    answer: "Alligator wrestler",
    choices: ["Butcher", "Firefighter", "Alligator wrestler", "Tailor"],
    userAnswer: ""
  },
  {
    question: "The legends of vampires in the U.S. were most largely concentrated in the North-East, specifically New England, with the most recent 'vampire slaying' taking place as recently as the 1890's. While vampires aren't real, we now know that what was believed to be the effects of vampires was really what disease?",
    answer:"Tuberculosis",
    choices: ["Measles", "The Black Plague", "The flu", "Tuberculosis"],
    userAnswer: "",
  },
  {
    question: "John McCain was involved in the destruction of how many planes during his career as a pilot?",
    answer: "4",
    choices:["1", "2", "3", "4"],
    userAnswer: ""
  }
];

var correct = 0;

function displayQuestions(){
  $("#quizForm").empty();
  questions.forEach(function(question, index) {
    var questionJS = $("<div>").addClass("form-group");
    var $label = $("<h4>")
   .text(question.question)
    $label.appendTo(questionJS);
    question.choices = question.choices.sort(function() {
      return .5 - Math.random();
    });

    for (var i = 0; i < question.choices.length; i++){
      var choiceJS = $('<div>');
      choiceJS.addClass('form-check form-check-inline');
      var $radio = $('<input>');
      $radio.attr({
        
        value: question.choices[i],
        type: "radio",
        name: index[i],
        class: "form-check-input"
      })
      .appendTo(choiceJS);
      var $choiceLabel = $('<label>');
      $choiceLabel.text(question.choices[i])
      .addClass("form-check-label")
      .appendTo(choiceJS);
      choiceJS.appendTo(questionJS);
    }
    $("#quizForm").append(questionJS);
   
  });
}
  $("#quizForm").on("change", ".form-check-input", function(){
    console.log(this);
    var questionIndex = $(this).attr("name");
  
    console.log(questions[i].userAnswer)
  
    questions.userAnswer = $(this).val();
  
    // questions[questionIndex].userAnswer === answer;
    // questions.userAnswer.push(userInput);
    
    
    // if (answer === questions.answer){
    //   correct++;
    //   console.log(correct);
    // }

  });

  function addSubmit(){
    var buttonDivJS = $('<div>');
    var submitButtonJS = $('<button>');
    submitButtonJS.addClass('btn btn-info');
    submitButtonJS.attr('id', 'submitButtonHTML');
    submitButtonJS.text('Submit');
    (buttonDivJS).append(submitButtonJS);
    $("#quizForm").append(buttonDivJS);
  }
  

 
  displayQuestions();

  addSubmit();

  function reset(){
    alert(`You got ${correct} correct!`)
    $('quizForm').empty();
    displayQuestions();
    addSubmit();
  }


  $('#submitButtonHTML').on("click", function(event){
    event.preventDefault();
    reset();
  });

});

  
  