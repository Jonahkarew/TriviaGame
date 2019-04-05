//make variables for questions, user score correct


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

var userCorrect = 0;


// make the questions appear on the page
function renderQuestions(){
questions.forEach(function(question, index){
  var $question = $("<div>").addClass("form-group");
  var $label = $("<h3>");
  $label.text(questions.question);
  $label.appendTo($question);
});
};