let boxes = document.querySelectorAll("#box");
let reset = document.querySelector(".reset-btn");
let turnX = true; 
let msgContainer = document.querySelector(".winner");
let msg = document.querySelector(".msg");
let playagain = document.querySelector(".new-btn");
const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
       [0,4,8],[2,4,6]
];
const checkWinner=()=>{
   for(let pattern of winPatterns){
     let pos1Val = boxes[pattern[0]].innerText;
     let pos2Val = boxes[pattern[1]].innerText;
     let pos3Val = boxes[pattern[2]].innerText;
     if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val == pos2Val && pos2Val==pos3Val){
            displayMsg(pos1Val);
        }
     }
   }
}
const displayMsg = (winner)=>{
    msg.innerText = `${winner} wins!! `;
    msgContainer.classList.remove("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
          turnX=false;
          box.innerText = "X";
        }else{
            turnX=true;
            box.innerText = "0";
        } 
        box.disabled = true; //so that we can't click the box again, this is an inbuilt fun
        checkWinner();
    }); 
});
const resetFun =()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    });
}
reset.addEventListener("click",resetFun);
playagain.addEventListener("click",resetFun);
playagain.addEventListener("click",()=>{
    msgContainer.classList.add("hide");
})

