// 


// restart button 
let BUTTON = $("#restart").click( restartRound );


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


function alertDiv(name){
    let popup = document.createElement('div');
    popup.style.backgroundColor = 'transparent';

    let maseg = document.createElement('p');
    maseg.style.fontSize = 'xx-large' ;
    maseg.append(name + " WIN !");

    popup.appendChild(maseg);

    let ok = document.createElement('button');
    ok.click(function(){
        popup.animate({
        height: 'toggle'});
    });
}  

 function start() {
// Get Id of div was clicked , Abd save it in currentBox
    let boxID = $(this).attr('id');
    let currentBox = $('#'+boxID);

// If's even number is X turn  
    if (turn%2 === 0) {
        turn++;
        playerTurn.text(" Turn to player O  .  ");

// add  imag(x) to the div was clicked 
        currentBox.css( {'background-image':'url("imgs/X.png")'} );

// Get div was clicked , Abd make it un-clickable .        
         this.removeEventListener('click',start);

// call function  winner checking if player wien .         
         winner("X.png" , $("#player1").val() );
        //  round( $("#player1").val() , $("#player2").val() );

// If's odd number so is O turn  
    } else {
         turn++;
         playerTurn.text(" Turn to player X  .  ");
                
         currentBox.css( {'background-image':'url("imgs/O.png")'} );

         this.removeEventListener('click',start );
         winner("O.png" , $("#player2").val() ); 

        //  round( $("#player2").val() , $("#player1").val() );
         
    }

};// END function start() .. 




function winner(img , player ) {

// start a sound win player wien .
    var mySound = new Audio("wien.mp3");

// .style.cssTex => undefined || if the boxs (div) was clicked so will return 'background-image....'
// .includes(img) to check what the image type ( X , O ) .
if ( boxs[0].style.cssText.includes(img) && boxs[1].style.cssText.includes(img) && boxs[2].style.cssText.includes(img)   ){
        mySound.play(); 
        round(player);
    
    }else if (  boxs[3].style.cssText.includes(img) && boxs[4].style.cssText.includes(img) && boxs[5].style.cssText.includes(img)   ){
             mySound.play();
             round(player);
    
    }else if ( boxs[6].style.cssText.includes(img) && boxs[7].style.cssText.includes(img) && boxs[8].style.cssText.includes(img) ){
             mySound.play();
             round(player);
    
    }else if ( boxs[0].style.cssText.includes(img) && boxs[4].style.cssText.includes(img) && boxs[8].style.cssText.includes(img) ){
              mySound.play();
              round(player);
    
    }else if ( boxs[6].style.cssText.includes(img) && boxs[4].style.cssText.includes(img) && boxs[2].style.cssText.includes(img) ){
              mySound.play();
              round(player);   
    
    }else if ( boxs[6].style.cssText.includes(img) && boxs[4].style.cssText.includes(img) && boxs[2].style.cssText.includes(img) ){
              mySound.play();
              round(player); 
    
    }else if ( boxs[0].style.cssText.includes(img)  && boxs[3].style.cssText.includes(img) && boxs[6].style.cssText.includes(img)  ){
              mySound.play();
              round(player);   
    
    }else if (  boxs[1].style.cssText.includes(img) && boxs[4].style.cssText.includes(img) && boxs[7].style.cssText.includes(img)   ){
              mySound.play();
              round(player);
    
    }else if (  boxs[2].style.cssText.includes(img)  && boxs[5].style.cssText.includes(img)  && boxs[8].style.cssText.includes(img)  ){
              mySound.play();
              round(player);
              
    }

}// END function winner(img , player )


for (let i = 0; i < boxs.length; i++) {
    boxs[i].addEventListener('click',start);
    }




    function round( playerWin ) {
        rounds +=1 ;
        if ( playerWin === $("#player1").val() ) {
            playerRound.text(" Rounds " + rounds +"  "+playerWin+":  "+ (player1Score+=1) +" "+$("#player2").val()+": "+ player2Score );
        } else {
            playerRound.text(" Rounds " + rounds +"  "+$("#player2").val()+":  "+ player1Score +" "+playerWin+": "+ (player2Score+=1) );
        }

        alert( playerWin + ' WIEN !'); 
        restart();
    }


    function restart(){

        // reset every thing to the defult..
    /// clear all imegs in ever div in the  game board (container).
    // And turn , player1 , player2 .

        for (let i = 0; i < boxs.length; i++)
         { 
             boxs[i].style.cssText = ''; 
             boxs[i].addEventListener('click',start);
         }
    
        turn = 0 ;
        playerTurn.text(" Turn to player X  .  "); 

    }// END function restart() ..  


    function restartRound(){ 

        rounds = 0 ;
        $("#player1").val('');
        $("#player2").val('');

        restart();
        playerRound.text("");

    }

