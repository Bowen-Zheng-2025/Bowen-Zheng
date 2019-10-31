/* arrayReader(array, split)
take an array of strings in the format of text 1 split text 2
cleans up any extra whitespace
turns this into an object of form {str: text1, bool: bool based on text 2}
text 2 is assumed to be the words true or false. Uses these to set bools
makes a new array where each element is an object.
@param array: {array} an array with string containing the split
@param split: {string} the item to split at
@return {array} an array of objects keyed with str and bool
*/
function arrayReader(array, split){

  var retArr = [];
  for (var i = 0; i < array.length; i++) {
    var obj = {}
    var line = array[i].split(split)
    obj.str = line[0].trim();
    if (line[1].trim() === "true") {
      obj.bool = true;
    }
    else{
      obj.bool = false;
    }
  retArr.push(obj);
  }
  return retArr;
}
/* uniqueIndex(max, number)
a helper function to get unique numbers out of a range so as to avoid reuse.
@param max {int} the max number in the number in the range +1
@param number {int} the number of responses to return
@return {array} an array of the selected number
*/
/* makeSentence(condition)
Makes a (likely run-on) sentence out of a conditional stored in an object with
the keys str, bool, and negated. It does the following: if negated then it capitalized
the i in "it is not the case" and adds a period to the end of the str. If it is not
negated then it adds the phrase "It is the case " to the start of the str and adds a
period to the end of the string.
@param condition {array} an array of objects formatted as listed above
@return {object} a new object with the same general format*/

function makeSentence(condition){
if(condition.negated){
  condition.str = "I" + condition.str.slice(1) + ".";
}
else {
  condition.str = "It is the case" + condition.str + ".";
    }
    return condition;
  }

  /* notEval(condition)
  takes a condtion, negates it's value, adds the text "it is not the case that" to the
  front of it, sets the negated key to true
  @param condtion {object} an object with str and bool keys
  @return {object} an object with str, bool, and negated keys
  */
  function notEval(condition){
return {str: "it is not the case that" + condition.str,
        bool : !condition.bool,
        negated : !condition.negated};
  }
  //3. implement the following
  /* makeQuestion(conditions, maxDepth=3, negate=.2)
  takes an array of condition objects formated {str: text, bool: bool, negated: bool}
  and uses it make a question of depths between 1 - maxDepth combined statement length
  it should randomly use and or ors at a 50% chance each
  @param condition {array} an array of objects formatted as listed above
  @param maxDepth {int} number of conditionals to be put together at max
  @param negate {float} chance of a negation happening
  @return a new object with the same general format
  */
  /*^^^ with this one -
  You'll need to pick random things without replacement (did we do a function for that?)
  You'll need to have a random chance of a negation (by default 20% (aka .2)
  You'll need to loop through maxDepth amount of things and glue them together, but you'll have to do something different when there is only 1 left . What sort of loop and logic would work best for this?

1. make a return object;
2. find out the actual depth;
  If depth is 1... pick one thing at random off conditions... check if we negate, returns
  Otherwise - 1. pick our things - uniqueIndex(conditions.length, depth);
              2. start doing the big returns
                 1. make a for loop (things.length -1)
                 2. in the for loop, we want to determine if we use and or or
                 [42, 11, 27, 32, 0]
                   0,  1,  2,  3, 4
                 we need 2 things, nut we make a for loop we get 1 thing =/
                 if we use i for our iterrator we could overcome this 1 of 3 ways
                    Way #1 i & i+1, make our loop using length -2 rather than -1
                    Way #2 i & i-1, we could set i to 1 initally or if i = 0 continue;
                      why are ways 1 and 2 kind of bad?

                        First step is to pick first two.
                          Ex: 42,11
                        The second set and there on.
                          Ex:11, 27
                        So if we were to fix that... we'd need to come up with some
                        way to skip a sequence.
                        If we do that, when all is said and done, we still have to
                        add all the sets together.
                        Ex: {42, 11} {23, 32}
                      We would have to come up with a way of dealing with having
                      an uneven number of things.

                    Way #3 for i in length of things pop off the end we will have
                        to treat the first one different as with way 2 above
                        Way #3 when we have the first thing check if it is negated
                        make the return object = to the first thing
                        following the first thing figure out and or or, and, negation
                        retObj = which ever eval(new item, retObj)
              3. return retObj;
  */
