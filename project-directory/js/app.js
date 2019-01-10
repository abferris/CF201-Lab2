alert('Welcome to the quick quiz about me! My name is Aaron, and I hope that you have a lot of fun here!'); //quiz intro
var username = prompt('What is your name?')
console.log('name',name)

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
//identifying result variables

var ansOne = prompt('Question One: My name is Aaron Blake Ferris. Is this true? Yes or no?' ).toUpperCase(); //question 1
console.log('Answer 1',ansOne); //log the answer


if (ansOne === 'YES' || ansOne === 'Y'){
   resultOne = 'Correct!';
   score++ ;
} else if (ansOne === 'NO' || ansOne === 'N'){
     resultOne = "Wrong!";
  }else{
   resultOne = "Invalid Answer!";
  }
  questions ++;
  console.log('Score', `${score}/${questions} `);
  
  console.log('Result 1', resultOne);
 alert(`${resultOne} Yes it is.`); //STRING INTERPOLATION help from Billy who got it from code academy


 var ansTwo = prompt('Question Two: I am the oldest of three children. Is this true? Yes or no?').toUpperCase(); //question 2
console.log('Answer 2',ansTwo); //log the answer

if (ansTwo === 'YES' || ansTwo === 'Y'){
   resultTwo = 'Wrong!';
} else if (ansTwo === 'NO' || ansTwo === 'N'){
     resultTwo = "Correct!";
     score++;
  }else{
   resultTwo = "Invalid Answer!";
  }
  questions ++;
  console.log('Score', `${score}/${questions} `);
  console.log('Result 2', resultTwo);
 alert(`${resultTwo} No. I am the youngest of three.`);//STRING INTERPOLATION help from Billy who got it from code academy

 var ansThree = prompt('Question Three: My two older brothers are named Drew and Reed. As my father and grandmother are both teachers, I was almost named Wright. Is this true? Yes or no?').toUpperCase(); //question 3
console.log('Answer 3',ansThree); //log the answer

if (ansThree === 'YES' || ansThree === 'Y'){
   resultThree = 'Correct!';
   score ++;
} else if (ansThree === 'NO' || ansThree === 'N'){
     resultThree = "Wrong!";
  }else{
   resultThree = "Invalid Answer!";
  }
  questions ++;
  console.log('Score', `${score}/${questions} `);
  console.log('Result 3', resultThree);
 alert(`${resultThree} Yes. Thank goodness they decided otherwise, which kept me from much childhood teasing. Now Key and Peel have opened that can of worms for my name`); //STRING INTERPOLATION help from Billy who got it from code academy

 var ansFour = prompt('Question Four: I have played ultimate at a competitive level, known as club. I also currently enjoy giving back to the ultimate community by coaching teams my at alma mater Eckstein Middle School. Is this true? Yes or no?').toUpperCase(); //question 4
console.log('Answer 4',ansFour); //log the answer

if (ansFour === 'YES' || ansFour === 'Y'){
   resultFour = 'Wrong!';
} else if (ansFour === 'NO' || ansFour === 'N'){
     resultFour = "Correct!";
     score++;
  }else{
   resultFour = "Invalid Answer!";
  }
  questions ++;
  console.log('Score', `${score}/${questions} `);
  console.log('Result 4', resultFour);
 alert(`${resultFour} No. Unfortunatly life gets in the way. Codefellows is busy enough that I do not have the time to commit to something like that during the school day. You should know that!`); //STRING INTERPOLATION help from Billy who got it from code academy

 var ansFive = prompt('Question Five: I play Dungeons and Dragons! I prefer to play hack and slash fighting characters to make things as simple as possible. Is this true? Yes or no?').toUpperCase(); //question 5
console.log('Answer 5',ansFive); //log the answer

if (ansFive === 'YES' || ansFive === 'Y'){
   resultFive = 'Wrong!';
} else if (ansFive === 'NO' || ansFive === 'N'){
     resultFive = "Correct!";
     score ++;
  }else{
   resultFive = "Invalid Answer!";
  }
  questions ++;
  console.log('Score', `${score}/${questions} `);
  console.log('Result 5', resultFive);
 alert(`${resultFive} No. If you know anything about me, I am a glutton for punishment! I enjoy playing magic-users, as knowing and managing your spells is often more complex and difficult. However dumb characters can be played in VERY fun ways.`); //STRING INTERPOLATION help from Billy who got it from code academy

for(var i=4; i>0; i--) { //loop for attempts
   console.log('attempts', i); // log tries

   var ansSix = prompt(`Question Six: How old am I? You currently have ${i} attempts left.`);//question six
   console.log('Answer 6',ansSix); //log answer
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

for (var j=6; j>0; j--){ // counter
   console.log('attempts', j); //log tries
   var ansSeven = prompt(`What are one of the peices of my favorite meal my parents make? You have ${j} attempts left.`).toUpperCase(); //seventh question

   console.log ('Answer 7', ansSeven); // log answer seven

   for (var k=0; k<foods.length; k++){// loop for running answer against arrays
      console.log('test',foods[k]);// log which foods it looked at
      if ( ansSeven === foods[k] ) {//is check against part of array
   
   alert('Correct!');// good job
   score ++; 
   j=0;// end first for loop
      }
   }
}
 alert(`THE RESULTS ARE IN! ${username} you scored ${score}/${questions}`);// result