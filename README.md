# TriviaGame

created a trivia game, or tried to at least.

Used javascript and jquery to make questions in an array and diplay them in the html.
The answer choices change positions randomly each time the reset function runs which is nice.
The quiz begins when the start quiz button is hit which then renders the answers to the page.
The button also begins a 60 seconds timer that is meant to run the reset function when it hits 0.
For some reason I can't get the timer to display to the page, I'm not sure what exactly is going wrong there
as it should display underneath the h1. When the timer hits 0 an error displays in the consol.log()
saying that the reset function is not defined, but the reset function does run when the submit button is hit at the bottom,
so I guess that the quiz works fine if you finish within the time limit. When the submit button is hit an alert
is displayed telling the player how many of the questions they got right. After the player 
accepts the alert the reset function works mostly fine, resetting the page, but not the start
button or the timer. I am really confused on why I can't get these features to work, but I believe
that these are the largest problems with the application.