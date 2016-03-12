var tttcells = document.getElementsByClassName('tttcell')
var pturn = "";
var msg = "";
var log = "";
var quit = "";
var counter = 0;
var checkwon = false;

function reset() {
   document.querySelector('div #a1').innerHTML = "";
   document.querySelector('div #a2').innerHTML = "";
   document.querySelector('div #a3').innerHTML = "";
   document.querySelector('div #b1').innerHTML = "";
   document.querySelector('div #b2').innerHTML = "";
   document.querySelector('div #b3').innerHTML = "";
   document.querySelector('div #c1').innerHTML = "";
   document.querySelector('div #c2').innerHTML = "";
   document.querySelector('div #c3').innerHTML = "";
}

var name = prompt("Choose 'RED or BLUE to begin...", "Type 'RED'..or..'BLUE'");
pturn= name;


for (var i = 0; i <tttcells.length; i++ ){
   tttcells[i].addEventListener("click", startevent)


// var name = prompt("Choose 'RED or BLUE to begin...", "Type 'RED'..or..'BLUE'");
// pturn= name;

function startevent(event) {
console.dir(event);
checksquare();
checkwinner();
}


function checksquare() {
   if(pturn==="RED"&&event.target.innerHTML!=="RED"&&event.target.innerHTML!=="BLUE"&&quit!==1) { 
      applyColour(event,"RED");
      pturn = "BLUE";
      msg = document.querySelector('div #message');
      msg.innerHTML = "BLUE's turn, click on a square!";
      //tttcells:hover.style.backgroundColor = red;
      document.getElementById("logX").innerHTML = document.getElementById("logX").innerHTML + "RED plays " + event.target.id + ", ";
   }
   else 
   if(pturn==="BLUE"&&event.target.innerHTML!=="RED"&&event.target.innerHTML!=="BLUE"&&quit!==1) {
      applyColour(event,"BLUE");
      pturn = "RED";
      msg = document.querySelector('div #message');
      msg.innerHTML = "RED's turn, click on a square!";
      //tttcells:hover.style.backgroundColor = blue;
      document.getElementById("logO").innerHTML = document.getElementById("logO").innerHTML + "BLUE plays " + event.target.id + ", ";
   }
}


function applyColour() {
   if(pturn==="RED"){
      event.target.style.backgroundColor = "red";
      event.target.innerHTML = "THREE";
      counter++;
   }
   else
   if(pturn==="BLUE") {
      event.target.style.backgroundColor = "blue";
      event.target.innerHTML = "AMIGO"
      counter++;
   }
}


function turnColour(RED) {
   if(pturn==="RED") {
      x.style.backgroundColor = "red";
   }
   else
   if(pturn==="BLUE") {
      o.style.backgroundColor = "blue";
   }
}


function checkTie() {
   if(counter==9&&checkwon==false) {
      alert("It is a tie! Try again!");
      
   }
}


function checkwinner() {
   if((s("a1")===s("a2")&&s("a2")===s("a3")&&s("a3")!=="")||
      (s("b1")===s("b2")&&s("b2")===s("b3")&&s("b3")!=="")||
      (s("c1")===s("c2")&&s("c2")===s("c3")&&s("c3")!=="")||
      (s("a1")===s("b1")&&s("b1")===s("c1")&&s("c1")!=="")||
      (s("a2")===s("b2")&&s("b2")===s("c2")&&s("c2")!=="")||
      (s("a3")===s("b3")&&s("b3")===s("c3")&&s("c3")!=="")||
      (s("a1")===s("b2")&&s("b2")===s("c3")&&s("c3")!=="")||
      (s("a3")===s("b2")&&s("b2")===s("c1")&&s("c1")!=="")
      ) {
         msg = document.querySelector('div #message');
            if(pturn==="BLUE"){
               msg.innerHTML = "RED won!";
               alert("Game Over! RED wins!");
               checkwon=true;
            }
            else {
               msg.innerHTML = "BLUE won!";    
               alert("Game Over! BLUE wins!");
               checkwon=true;
            }
         }
      function s(i) {
         return document.getElementById(i).innerHTML;
      }
      checkTie();
}
      
};