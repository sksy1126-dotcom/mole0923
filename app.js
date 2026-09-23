const score = document.querySelector("#score");
const timeLeft = document.querySelector("#time-left");
const mole = document.querySelector(".mole");
const squares =   document.querySelectorAll(".square");

let hitPosition;
let result=0;
let currentTime = 60;
let timeId = null;


function randomsSquare() {

      squares.forEach(square => {
         square.classList.remove("mole");
      });
    
      let  randomsSquare = squares[Math.floor(Math.random()*9)]

      randomsSquare.classList.add('mole');
      hitPosition = randomsSquare.id


}


function moveMole() {
    timeId = setInterval(randomsSquare,500);
}
moveMole();

squares.forEach(square => {
    square.addEventListener("mousedown", ()=>{
        if(square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition=null;
        }
    } );
});

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;


    if(currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timeId);
        alert("Game over! Your final score id "+ result);
    }

}
let countDownTimerId= setInterval(countDown,1000);