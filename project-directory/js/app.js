alert('Welcome to the quick quiz about me! My name is Aaron, and I hope that you have a lot of fun here!'); //quiz intro
alert('Please remember, these are yes or no questions!'); //extra instructions
var resultOne;
var resultTwo;
var resultThree;
var resultFour;
var resultFive;
//identifying result variables

var ansOne = prompt('Question One: I am the first of Three children. Is this true? Yes or no?' ).toUpperCase(); //question 1
console.log('Answer 1',ansOne); //log the answer


if (ansOne === 'YES' || ansOne === 'Y'){
   resultOne = 'Correct!';
} else if (ansOne === 'NO' || ansOne === 'N'){
     resultOne = "Wrong!";
  }else{
   resultOne = "Invalid Answer!";
  }
  console.log('Result 1', resultOne);
 alert(`${resultOne} Yes it is.`); //STRING INTERPOLATION help from Billy who got it from code academy


 var ansTwo = prompt('Question Two: I am the oldest of three children. Is this true? Yes or no?').toUpperCase(); //question 2
console.log('Answer 2',ansTwo); //log the answer

if (ansTwo === 'YES' || ansTwo === 'Y'){
   resultTwo = 'Wrong!';
} else if (ansTwo === 'NO' || ansTwo === 'N'){
     resultTwo = "Correct!";
  }else{
   resultTwo = "Invalid Answer!";
  }
  console.log('Result 2', resultTwo);
 alert(`${resultTwo} No. I am the youngest of three.`);//STRING INTERPOLATION help from Billy who got it from code academy

 var ansThree = prompt('Question Three: My two older brothers are named Drew and Reed. As my father and grandmother are both teachers, I was almost named Wright. Is this true? Yes or no?').toUpperCase(); //question 3
console.log('Answer 3',ansThree); //log the answer

if (ansThree === 'YES' || ansThree === 'Y'){
   resultThree = 'Correct!';
} else if (ansThree === 'NO' || ansThree === 'N'){
     resultThree = "Wrong!";
  }else{
   resultThree = "Invalid Answer!";
  }
  console.log('Result 3', resultThree);
 alert(`${resultThree} Yes. Thank goodness they decided otherwise, which kept me from much childhood teasing. Now Key and Peel have opened that can of worms for my name`); //STRING INTERPOLATION help from Billy who got it from code academy

 var ansFour = prompt('Question Four: I have played ultimate at a competitive level, known as club. I also currently enjoy giving back to the ultimate community by coaching teams my at alma mater Eckstein Middle School. Is this true? Yes or no?').toUpperCase(); //question 4
console.log('Answer 4',ansFour); //log the answer

if (ansFour === 'YES' || ansFour === 'Y'){
   resultFour = 'Wrong!';
} else if (ansFour === 'NO' || ansFour === 'N'){
     resultFour = "Correct!";
  }else{
   resultFour = "Invalid Answer!";
  }
  console.log('Result 4', resultFour);
 alert(`${resultFour} No. Unfortunatly life gets in the way. Codefellows is busy enough that I do not have the time to commit to something like that during the school day. You should know that!`); //STRING INTERPOLATION help from Billy who got it from code academy

 var ansFive = prompt('Question Five: I play Dungeons and Dragons! I prefer to play hack and slash fighting characters to make things as simple as possible. Is this true? Yes or no?').toUpperCase(); //question 5
console.log('Answer 5',ansFive); //log the answer

if (ansFive === 'YES' || ansFive === 'Y'){
   resultFive = 'Wrong!';
} else if (ansFive === 'NO' || ansFive === 'N'){
     resultFive = "Correct!";
  }else{
   resultFive = "Invalid Answer!";
  }
  console.log('Result 5', resultFive);
 alert(`${resultFive} No. If you know anything about me, I am a glutton for punishment! I enjoy playing magic-users, as knowing and managing your spells is often more complex and difficult. However dumb characters can be played in VERY fun ways.`); //STRING INTERPOLATION help from Billy who got it from code academy