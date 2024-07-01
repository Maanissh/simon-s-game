let gameSeq =[];
let userSeq = [];
let started = false;
let btns = ["yellow","red","purple","green"];
let level =0;
let highscore =0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",()=>{
    if(started == false){
        console.log("game is started");
        started = true;

        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function userbtnflash(btn){
    btn.classList.add("user");
    setTimeout(function(){
        btn.classList.remove("user");
    },200);
}
function levelup(){
    userSeq=[];
    level++;
    h2.innerHTML = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randbtn);
}
function chechAns(idx){
    console.log(`curr level : ${level}`);

    
    if(userSeq[idx]== gameSeq[idx]){
        if(userSeq.length== gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerText="Game over! press any key to start";
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}
function btnPress(){
    let btn = this;
    console.log(this);
    userbtnflash(btn);

    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    
    chechAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    if(level>highscore){
        let h3 = document.querySelector("h3");
        highscore=level;
        h3.innerText = `New Highscore! ${level}`;
    }
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}