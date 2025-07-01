let gameSeq =[];
let userSeq =[];
let btns = ["red","yellow","green","blue"];
let started = false ;
let level = 0 ;
let highestlvl = 0 ;


let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
   if(started == false){
    console.log("game is started");
    started = true ;

    levelUp()
   }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },500);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },500);
}

function levelUp(){
    level++ ;
    h2.innerText = `level ${level}`
    userSeq = [];
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    gameSeq.push(randColor) ;
    console.log(gameSeq)
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn)
}

function btnPress(){
    let btn = this;
    userFlash(btn)
    userSeq.push(this.classList[1]);
    check(userSeq.length-1)

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);

}

function check(indx){
    if(userSeq[indx] == gameSeq[indx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp(),1000);
       }
    }else{
        h2.innerHTML = `GAMEOVER ! Your level was <b>${level}</b> <br> press any key to restart`;
        reset();
        let body = document.querySelector("body");
        body.classList.add("gameover")
        setTimeout(function(){
            body.classList.remove("gameover")
        },150);
    }
    console.log(`current level ${level}`);
    if(highestlvl < level ){
        highestlvl = level;
        let div = document.querySelector("#high")
        div.innerText = `your highest level is ${level}`
    }
}

function reset(){
    started = false;
    gameseq = [];
    userSeq=[];
    level = 0 ;
}