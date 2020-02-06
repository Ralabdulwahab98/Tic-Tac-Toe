// JS code of Tic Tac Toe Game


// ALL LOCAL VARBEL

// restart button 
$("button").click( restartRound );
$('.close').click( function() { $('.alert').css({"display":"none"}) });  



// <p> to display player turn( X , O )..
 let playerTurn = $("#turn");
// Determine turn of player   
 let turn = 0;

//  To get all div in game board (container).
let boxs = $(".box");


// <h2> to display player round..
let playerRound = $("#rounds");
// Determine round of player   
let rounds = 0 ;
// Determine Score of player 
player1Score = 0;
player2Score = 0;



// LOOP to make every div with class ( .boxs ) clickebl
for (let i = 0; i < boxs.length; i++) {

  boxs[i].addEventListener('click',start);
  
  }


// It is function same alert shows winner..
// Take an argemnt of win player name 

function alertDiv(name){

// div to  display
$('.alert').css({"display":"block"});  


  if(name === "TIE" ){
      $('.alert-div').css( {'background-image':'url("https://media.giphy.com/media/iuuOaH3W9JLWg/giphy-downsized.gif")'} );
      $('#maseg').text("" );
  }else if ( name === ""){
      $('#maseg').text( " Please write players name.. " ); 
      $('.alert-div').css( {'background-image':''} );
  }else{ 
      $('#maseg').text( name + " WIN !" ); 
      $('.alert-div').css( {'background-image':''} );
  }
  
}  



// It is function when game start..

function start() {
// start a sound win player click .     
  const buttonSound = new Audio("Button.mp3");
  buttonSound.play();
  

// Get Id of div was clicked , Abd save it in currentBox
  let boxID = $(this).attr('id');
  let currentBox = $('#'+boxID);


  if ( ($("#player1").val() === "" ) &&  ( $("#player2").val() === "")  ) {
      alertDiv("");

// If's even number is X turn  
  }else if (turn%2 === 0) {
      turn++;
      playerTurn.text(" Turn to player O  .  ");

// add  imag(x) to the div was clicked 
      currentBox.css( {'background-image':'url("imgs/X.png")'} );
      currentBox.css( {'cursor':'no-drop'} );

// Get div was clicked , Abd make it un-clickable . 

       this.removeEventListener('click',start);

// call function  winner checking if player wien .         
       winner("X.png" , $("#player1").val() , turn );
      

// If's odd number so is O turn  
  } else {
       turn++;
       playerTurn.text(" Turn to player X  .  ");
              
       currentBox.css( {'background-image':'url("imgs/O.png")'} );
       currentBox.css( {'cursor':'no-drop'} );
       

       this.removeEventListener('click',start );

       winner("O.png" , $("#player2").val() , turn ); 

       
  }

};



// It is function check when someone win..
function winner(img , player , turn  ) {

// start a sound win player wien .
  const winnerSound = new Audio("wien.mp3");

// .style.cssTex => undefined || if the boxs (div) was clicked so will return 'background-image....'
// .includes(img) to check what the image type ( X , O ) .
if ( boxs[0].style.cssText.includes(img) && boxs[1].style.cssText.includes(img) && boxs[2].style.cssText.includes(img)   ){
  winnerSound.play(); 
      round(player);
  
  }else if (  boxs[3].style.cssText.includes(img) && boxs[4].style.cssText.includes(img) && boxs[5].style.cssText.includes(img)   ){
      winnerSound.play();
           round(player);
  
  }else if ( boxs[6].style.cssText.includes(img) && boxs[7].style.cssText.includes(img) && boxs[8].style.cssText.includes(img) ){
      winnerSound.play();
           round(player);
  
  }else if ( boxs[0].style.cssText.includes(img) && boxs[4].style.cssText.includes(img) && boxs[8].style.cssText.includes(img) ){
      winnerSound.play();
            round(player);
  
  }else if ( boxs[6].style.cssText.includes(img) && boxs[4].style.cssText.includes(img) && boxs[2].style.cssText.includes(img) ){
      winnerSound.play();
            round(player);   
  
  }else if ( boxs[6].style.cssText.includes(img) && boxs[4].style.cssText.includes(img) && boxs[2].style.cssText.includes(img) ){
      winnerSound.play();
            round(player); 
  
  }else if ( boxs[0].style.cssText.includes(img)  && boxs[3].style.cssText.includes(img) && boxs[6].style.cssText.includes(img)  ){
      winnerSound.play();
            round(player);   
  
  }else if (  boxs[1].style.cssText.includes(img) && boxs[4].style.cssText.includes(img) && boxs[7].style.cssText.includes(img)   ){
      winnerSound.play();
            round(player);
  
  }else if (  boxs[2].style.cssText.includes(img)  && boxs[5].style.cssText.includes(img)  && boxs[8].style.cssText.includes(img)  ){
      winnerSound.play();
            round(player);

// if else all div with class ( .boxs ) was clicked and no condition is true so no one win .    
  }else if (turn === 9) {
      round("TIE");
  }

}


// It is function  who someone win in the round..
  function round( playerWin ) {
      rounds +=1 ;
      if ( playerWin === $("#player1").val() ) {
          playerRound.text(" Rounds " + rounds +"  "+playerWin+":  "+ (player1Score+=1) +" "+$("#player2").val()+": "+ player2Score );
          alertDiv(playerWin); 

      }else if( playerWin === "TIE" ){    
          alertDiv("TIE"); 

          //if (playerWin === $("#player2").val() )
      } else{
          playerRound.text(" Rounds " + rounds +"  "+$("#player2").val()+":  "+ player1Score +" "+playerWin+": "+ (player2Score+=1) );
          alertDiv(playerWin); 
      }
      
      restart();
  }


  function restart(){

  /// LOOP to clear all imegs in ever div in the  game board (container).
  // And make them clickebl agin .. 
      for (let i = 0; i < boxs.length; i++)
       { 
           boxs[i].style.cssText = ''; 
           boxs[i].addEventListener('click',start);
       }
  
      turn = 0 ;
      playerTurn.text(" Turn to player X  .  "); 

  } 

// This function to reset every thing to the defult..
  function restartRound(){ 

      rounds = 0 ;
      player1Score = 0;
      player2Score = 0; 
      $("#player1").val('');
      $("#player2").val('');

      restart();
      playerRound.text("  Round 1  ");

  }



