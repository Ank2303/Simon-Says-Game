let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let highScore=0;
let btns=["red","brown","blue","green"]
let h3=document.querySelector('h3');
document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game has started");
    started=true;}
    levelUp();
})
function flashUp(btn){
    btn.classList.add("flash");
    setTimeout(function(){
      btn.classList.remove("flash");  
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let ranNum=Math.floor(Math.random()*3);
    let ranCol=btns[ranNum];
    let ranBtn=document.querySelector(`.${ranCol}`);
    // console.log(ranNum);
    // console.log(ranCol);
    // console.log(ranBtn);
    gameSeq.push(ranCol);
    console.log(gameSeq);
    flashUp(ranBtn);
}
function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
     if(userSeq.length==gameSeq.length)
        setTimeout(levelUp(),1000);
    }
    else{
      h3.innerHTML=`Game Over!Your score was <b>${level}</b><br>Press any key to start`; 
      highScore=Math.max(level,highScore);
      document.querySelector("#high-score").innerText=`Highest Score is:${highScore}`; 
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
      },150);
      reset();
    }
}
function btnPress(){
    // console.log(this);
   let btn=this;
   flashUp(btn);
   let userCol=btn.getAttribute("id");
   userSeq.push(userCol);
   checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}