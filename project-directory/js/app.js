//intro
alert('Welcome to the quick quiz about me! My name is Aaron, and I hope that you have a lot of fun here!');
//username prompt
var username = prompt('What is your name?')
console.log('name',name)

//variables
var resultOne;
var resultTwo;
var resultThree;
var resultFour;
var resultFive;
var resultSix;
var resultSeven;
var score = 0;
var questions = 0;
var foods = ['PESTO', 'PESTO PASTA', 'GARLIC BREAD', 'RED WINE', 'WINE'];

var quest = ['My name is Aaron Blake Ferris.', 'I am the oldest of three children.', 'My two older brothers are named Drew and Reed. As my father and grandmother are both teachers, I was almost named Wright.', 'I have played ultimate at a competitive level, known as club. I also currently enjoy giving back to the ultimate community by coaching teams my at alma mater Eckstein Middle School.', 'I play Dungeons and Dragons! I prefer to play hack and slash fighting characters to make things as simple as possible.'];

var correctOne = ['YES', 'NO', 'YES', 'NO', 'NO'];
var correctTwo = ['Y', 'N', 'Y', 'N', 'N'];

var wrongOne = ['NO', 'YES', 'NO', 'YES', 'YES'];
var wrongTwo = ['N', 'Y', 'N', 'Y', 'Y'];

var response = ['Yes it is.', 'No. I am the youngest of three.', 'Yes. Thank goodness they decided otherwise, which kept me from much childhood teasing. Now Key and Peel have opened that can of worms for my name.', 'No. Unfortunatly life gets in the way. Codefellows is busy enough that I do not have the time to commit to something like that during the school day. You should know that!', 'No. If you know anything about me, I am a glutton for punishment! I enjoy playing magic-users, as knowing and managing your spells is often more complex and difficult. However dumb characters can be played in VERY fun ways.'];



function qOneFive() {

for (var i=0; i<5; i++){
   var j= i+1 ;
   
   var ans = prompt( 'Question ' + j + ': ' + quest[i] + 'Is this true? Yes or no?').toUpperCase();
   console.log('Answer' + j, ans);
   if (ans === correctOne[i] || ans === correctTwo[i]) {
      result = 'Correct!';
         score++ ;
   } else
   if  (ans === wrongOne[i] || ans === wrongTwo[i]) {
      result = 'Wrong!';
   } else{
      result = "Invalid Answer!";
   }
   questions++;

   console.log('Score', `${score}/${questions}`);
   console.log('Result'+ j, result);
   alert(`${result} ${response[i]}`);
}
}
qOneFive();

function questionSix() {

  //question 6
//loop for attempts
for(var i=4; i>0; i--) { 
   console.log('attempts', i); 

   var ansSix = prompt(`Question Six: How old am I? You currently have ${i} attempts left.`);
   console.log('Answer 6',ansSix); 
   ansSix = parseInt(ansSix);

   if (ansSix === 27){ //if correct
      alert('Correct!');
      score ++;
      i=0;
      console.log('Question 6', 'Correct');
   } else
   if (ansSix<27){ // if high
      alert('Too Low Joe!');
      console.log('Question 6', 'Wrong');

   }else
   if (ansSix>27){ // if low
      alert('Too high guy!');
      console.log('Question 6', 'Wrong');
   } else{ //invalid answer
      alert('Invalid answer fool!');
      console.log('Question 6', 'Wrong');
   }
}
questions ++;
//end question 6
}
questionSix();

function questionSeven() {
 questions++;
//question 7
// counter
for (var j=6; j>0; j--){ 
   console.log('attempts', j); 
   var ansSeven = prompt(`What are one of the peices of my favorite meal my parents make? You have ${j} attempts left.`).toUpperCase(); 
   console.log ('Answer 7', ansSeven); 

   // loop for running answer against arrays
   for (var k=0; k<foods.length; k++){
      //log foods checked against
      console.log('test',foods[k]);
      if ( ansSeven === foods[k] ) {
   alert('Correct!');
   score ++; 
   j=0;// end first for loop
      }
   }
}
//end questions 7
}
questionSeven();

// result
 alert(`THE RESULTS ARE IN! ${username} you scored ${score}/${questions}`);
