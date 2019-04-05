 // create question bank
 var questions = [
  {
    question: 'Question 1',
    answer: 'Answer 1',
    choices: ['Answer 1', "Answer 2", "Answer 3"],
    userAnswer: ""
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
    choices: ['Answer 1', "Answer 2", "Answer 3"],
    userAnswer: ""
  },
  {
    question: 'Question 3',
    answer: 'Answer 3',
    choices: ['Answer 1', "Answer 2", "Answer 3"],
    userAnswer: ""
  }
];

// set user score
var correct = 0;

// function to print all questions to page
function renderQuestions() {
  // clear out form
  $("#quiz-form").empty();



  // Loop through questions array
  questions.forEach(function (question, index) {
    // create div to hold question
    var $question = $("<div>").addClass("form-group");

    var $label = $("<h4>")
      .text(question.question)
      .appendTo($question);

    question.choices = question.choices.sort(function() {
      return .5 - Math.random();
    });
    
    for (var i = 0; i < question.choices.length; i++) {
      var $choice = $('<div>');
      $choice.addClass('form-check form-check-inline');
      var $radio = $('<input>');
      $radio
        .attr({
          type: "radio",
          value: question.choices[i],
          name: index,
          class: "form-check-input"
        })
        .appendTo($choice);
      var $choiceLabel = $('<label>');
      $choiceLabel
        .text(question.choices[i])
        .addClass('form-check-label')
        .appendTo($choice);
      $choice.appendTo($question);
    }
    $("#quiz-form").append($question);
  });
}
$("#quiz-form").on("change", ".form-check-input", function() {
  console.log(this);
  var questionIndex = $(this).attr("name");

  console.log(questions[questionIndex]);

  var answer = $(this).val();

  questions[questionIndex].userAnswer = answer;
  
});

renderQuestions();