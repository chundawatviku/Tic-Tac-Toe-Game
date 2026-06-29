let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let para = document.querySelector("p");
let newGame = document.querySelector("#new");

let playerO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    playerO = true;
    enabledboxes();
    msgContainer.classList.add("hide");
}
box.forEach((box) => {
    box.addEventListener("click",() => {
       if(playerO) {
        box.innerHTML = "O";
        playerO = false;
       }else {
        box.innerHTML = "X";
        playerO = true;
       }
       box.disabled = true;

       checkWinner();
    })
});


const checkWinner = () => {
    for(let pattern of winPatterns) {
         let pos1 = box[pattern[0]].innerHTML;
         let pos2 = box[pattern[1]].innerHTML;
         let pos3 = box[pattern[2]].innerHTML;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
           if(pos1 === pos2  && pos2 === pos3 ){
            console.log("Winner",pos1);
            showWinner(pos1);

          }
        }
    } 
};


const showWinner = (Winner) => {
     para.innerText = `Congratulations, Winner is ${Winner}`;
     msgContainer.classList.remove("hide");
     disabledboxes();
};

const  disabledboxes = () => {
    for(let val of box) {
       val.disabled = true;
    }
};

const  enabledboxes = () => {
    for(let val of box) {
       val.disabled = false;
       val.innerText = "";
    }
};

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);