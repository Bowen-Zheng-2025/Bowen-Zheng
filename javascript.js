/*
move javascript.js link to the bottom of the list.

in javascript.js -

make variables for the following-
playGame (if you are playing the game or not)
score
questions (this should be the results of your stringReader)

Make a while loop which continues while playGame is true
inside the loop -
have it make a question using makeQuestion
have it use prompt (look up how to use this) that shows a score and text of the question

if the player responds 1 or 2 have it evaluate to see if that matches the bool state
if it matches the question's bool state, add 1, if it does not, subtract one

if the player responds with a q have it set the playGame to false
^^^^^^^^ DO THIS FIRST WHEN ADDING THE WHILE LOOP

if the player enters r, have it set the score to 0.
*/
  var playGame = true;
  var score = 0;
  var questions = stringReader(content);
  while (playGame == true) {
    var makeQ = makeQuestion(questions);
    var pro = prompt("Hey dum-dum! Your score is " + score + "; If you want to get points so you don't suck, the question is: " + makeQ.str);
    if (pro == 1 && makeQ.bool == true) {
        score += 1;
    }
    if (pro == 1 && makeQ.bool == false ) {
        score -= 1;
    }
    if (pro == 2 && makeQ.bool == false) {
        score += 1;
    }
    if (pro == 2 && makeQ.bool == true) {
        score += 1;
    }
    if (pro == "q") {
      playGame = false;
    }
 }
