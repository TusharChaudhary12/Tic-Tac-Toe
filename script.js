let boxes=document.querySelectorAll(".box");


const winChance=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
let finished = false;
let turn0=true;
boxes.forEach((element)=>{
  element.addEventListener("click",()=>{
    if(finished) return;
    if(turn0)
   {
    element.innerText="0";
    turn0=false;
   }
  else
  {
    element.innerText="X";
    turn0=true;
  }
  element.disabled=true;
  win();
  });
});
const win=()=>{
for(let pattern of winChance)
{
  let pos1=boxes[pattern[0]].innerText;
  let pos2=boxes[pattern[1]].innerText;
  let pos3=boxes[pattern[2]].innerText;

  if(pos1!="" && pos2!="" && pos3!="")
  {
   if(pos1===pos2 && pos2===pos3)
   {
    finished = true;
    let msg=document.querySelector(".msg");
    msg.innerText=`Winner of the game is ${pos1}`
   }
  }
}
}


