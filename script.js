
// console.log("hellooooo")
let boxs=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msg=document.querySelector(".msg-con");
let wmsg=document.querySelector(".wmsg");
let count =0;


let turnO=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

boxs.forEach( (box) => {
    box.addEventListener("click",()=>{
        
        if(turnO){
            box.innerText = "O";
            box.style.color="yellow"
            turnO=false;
        }
        else{
            box.innerText ="X";
            box.style.color="red"
            turnO=true;
        }
        box.disabled= true;
        count++;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }

        // checkWinner();
    })
    
});


const showWinner = (winner)=>{
    wmsg.innerText=`Winner is ${winner} `
    msg.classList.remove("hide");
    console.log("winnnnnn")
    
    disableBoxs();

}








const checkWinner = ()=>{
    for(p of winPatterns){
        // console.log(p);
        let pos1Val= boxs[p[0]].innerText;
        let pos2Val= boxs[p[1]].innerText;
        let pos3Val= boxs[p[2]].innerText;


        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){

            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("wiinnnnenne", pos1Val)

                showWinner(pos1Val);
                
            }
        }
        

    }
}



//reset game button

const resetGame = ()=>{
    turnO = true;

    msg.classList.add("hide");

    enableBoxs();
    count=0;
    
}

//boxs ko disable krne kye lye

const disableBoxs = ()=>{
    for(let box of boxs){
        box.disabled = true;
    }
}

const enableBoxs = ()=>{
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";
    }
}

newGameBtn.addEventListener("click", resetGame);

resetBtn.addEventListener("click", resetGame);

// console.log(count);

const gameDraw = ()=>{

    msg.innerText = "Game was draw";
    msg.classList.remove("hide");
    disableBoxs();


}
