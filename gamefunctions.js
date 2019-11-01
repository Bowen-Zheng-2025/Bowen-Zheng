/* randNum(max);
a helper function to return whole number randoms
@param max {int} the max in the random range
@return {int} a random number of 1 or more
*/

  function randNum(max){
    return Math.floor((Math.random() * max) + 1);
  }

/* uniqueIndex(max, number)
a helper function to get unique numbers out of a range so as to avoid reuse.
@param max {int} the max number in the number in the range +1
@param number {int} the number of responses to return
@return {array} an array of the selected number
*/
  function uniqueIndex(max, number){
    var array = [];
    var numArray = [];
    array.length = max;
    for (var i = 0; i < number; i++) {
      var num = randNum(max -1)
      if (array[num] == "") {
        numArray[i] = num;
      }else{
        var num = randNum(max -1)
        i--
      }
      array[num] = ""
    }
    return numArray;
  }


/* andEval(condition1, condition2)
takes two conditions and makes a new condition out of them based on their combined
and state and combines the text of the two conditions. Cleans up text some
@param condition1 {object} an object with str and bool keys
@param condition2 {object} an object with str and bool keys
@return {object} an object with str and bool keys
*/

  function andEval(condition1, condition2){
    var retObj = {};
    retObj.str = condition1.str + " and " + condition2.str;
    retObj.negate = condition1.negated;
    retObj.bool = condition1.bool && condition2.bool;
    return retObj;
  }




/* orEval(condition1, condition2)
takes two conditions and makes a new condition out of them based on their combined
or state and combines the text of the two conditions. Cleans up text some
@param condition1 {object} an object with str and bool keys
@param condition2 {object} an object with str and bool keys
@return {object} an object with str and bool keys
*/

  function orEval(condition1, condition2){
    var retObj = {};
    retObj.str = condition1.str + " or " + condition2.str;
    retObj.negated = condition1.negated;
    retObj.bool = condition1.bool || condition2.bool;
    return retObj;
  }



/* notEval(condition)
takes a condtion, negates it's value, adds the text "it is not the case that" to the
front of it, sets the negated key to true
@param condtion {object} an object with str and bool keys
@return {object} an object with str, bool, and negated keys
*/
function notEval(condition){
  return {str:"It is not the case that " + condition.str, bool: !condition.bool, negated: !condition.negated}
}

function makeQuestion(conditions, maxDepth=3, negate=.2){
var retObj = {};
var depth = randNum(maxDepth);
 if (depth == 1) {
  var condi = conditions[randNum(conditions.length)];
     if (Math.random() < negate) { return notEval(condi); }
     else{ return condi; }
 }
 else {
   var ind = uniqueIndex(conditions.length, depth);
}
 for (var i = 0; i < depth -1; i++) {
   if (i == 0) {
     retObj = conditions[ind.pop()];
     if (Math.random() < negate) {  retObj = notEval(retObj) }
      else { continue; }
    }
      else {
        var ais = conditions[ind.pop()];
        if (Math.random() < negate) { ais = notEval(ais); }
       var pipe = Math.random();
       if (pipe < .5) { retObj = orEval(ais, retObj); }
       else { retObj = andEval(ais, retObj); }
      }
    }
    return retObj;
  }

  function makeSentence(condition){
    if (condition.negated) {
      condition.str = "I" + condition.str.slice(1) + ".";
    }else{
      condition.str = "It is the case " + condition.str + "."
    }
    return condition;
  }
