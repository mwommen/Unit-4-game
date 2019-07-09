
var psbleBtnValue = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var userTotal = 0;
var wins = 0;
var losses = 0;


var btnValue1 = psbleBtnValue[Math.floor(Math.random() * psbleBtnValue.length)];
console.log(btnValue1);
//need to attach to button1

var btnValue2 = psbleBtnValue[Math.floor(Math.random() * psbleBtnValue.length)];
console.log(btnValue2);
//need to attach to button2

var btnValue3 = psbleBtnValue[Math.floor(Math.random() * psbleBtnValue.length)];
console.log(btnValue3);
//need to attatch to button3

var btnValue4 = psbleBtnValue[Math.floor(Math.random() * psbleBtnValue.length)];
console.log(btnValue4);
//need to attatch to button4
var Random;

//choosing a random number
$( document ).ready(function(){
    Random=Math.floor(Math.random()*100+20)
    $('#numToGuess').text(Random);



$('#button1').on ('click', function(){
    userTotal = userTotal + btnValue1;
    console.log("New userTotal= " + userTotal, Random);
    $('#totalScore').text(userTotal); 
        if (userTotal === Random){
          winner();
        }
        else if ( userTotal > Random){
          lose();
        }   
  })  
  $('#button2').on ('click', function(){
    userTotal = userTotal + btnValue2;
    console.log("New userTotal= " + userTotal, Random);
    $('#totalScore').text(userTotal); 
        if (userTotal === Random){
          winner();
        }
        else if ( userTotal > Random){
          lose();
        } 
  })  
  $('#button3').on ('click', function(){
    userTotal = userTotal + btnValue3;
    console.log("New userTotal= " + userTotal, Random);
    $('#totalScore').text(userTotal);

          if (userTotal === Random){
          winner();
        }
        else if ( userTotal > Random){
          lose();
        } 
  })  
  $('#button4').on ('click', function(){
    userTotal = userTotal + btnValue4;
    console.log("New userTotal= " + userTotal, Random);
    $('#totalScore').text(userTotal); 
      
          if (userTotal === Random){
          winner();
        }
        else if ( userTotal > Random){
          lose();
        }  
}); 
}); 

function winner() {
    alert("You guessed correctly");
    wins++;
    $('#won').text(wins);
    reset();
}

function lose() {
    alert("You guessed incorrectly");
    losses++;
    $('#lost').text(losses);
    reset();
}

function reset(){
    Random=Math.floor(Math.random()*100+20)
    $('#numToGuess').text(Random);
    btnValue1 = psbleBtnValue[Math.floor(Math.random() * psbleBtnValue.length)];
    console.log(btnValue1);
    btnValue2 = psbleBtnValue[Math.floor(Math.random() * psbleBtnValue.length)];
    console.log(btnValue2);
    btnValue3 = psbleBtnValue[Math.floor(Math.random() * psbleBtnValue.length)];
    console.log(btnValue3);
    btnValue4 = psbleBtnValue[Math.floor(Math.random() * psbleBtnValue.length)];
    console.log(btnValue4);
    userTotal= 0;
    $('#totalScore').text(userTotal);
}




//picture change on hover 

function hover() {
    element.setAttribute('src', 'https://res-4.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_0/c_fill,f_auto,h_495,q_auto,w_880/v1/m/c/a/ca67ebd4b75af904131a2b3c79379a682179e85d/13012667.jpg');
  }
  
  function unhover() {
    element.setAttribute('src', 'https://pbs.twimg.com/media/D--KremW4AUFlza.jpg');
  }