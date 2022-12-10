let turn='x'
let title_head=document.querySelector('.head')
title_head.style.fontSize='2em'
function change(id){
    let element=document.getElementById(id)
    if(turn==='x' && element.innerHTML==''){
        element.innerHTML="x"
         turn='o'
        title_head.innerHTML='o'
    }
    else if(turn==='o' && element.innerHTML==''){
        element.innerHTML='o'
        title_head.innerHTML='x'
        turn='x'
         
    }
    winner()
}
let squers=[]
function winner(){
for(let i =1;i<10;i++){
    squers[i]=document.getElementById('item'+ i).innerHTML
}
if(squers[1]==squers[2] && squers[2]==squers[3] && squers[1]!=''){
    title_head.innerHTML=`${squers[1]} is winner`
    document.getElementById("item"+1).style.backgroundColor='#000'
    document.getElementById("item"+2).style.backgroundColor='#000'
    document.getElementById("item"+3).style.backgroundColor='#000'
}
else if(squers[4]==squers[5] && squers[5]==squers[6] && squers[4]!=''){
    title_head.innerHTML=`${squers[4]} is winner`
    document.getElementById("item"+4).style.backgroundColor='#000'
    document.getElementById("item"+5).style.backgroundColor='#000'
    document.getElementById("item"+6).style.backgroundColor='#000'
}
else if(squers[7]==squers[8] && squers[8]==squers[9] && squers[9]!=''){
    title_head.innerHTML=`${squers[7]} is winner`
    document.getElementById("item"+7).style.backgroundColor='#000'
    document.getElementById("item"+8).style.backgroundColor='#000'
    document.getElementById("item"+9).style.backgroundColor='#000'
}
else if(squers[1]==squers[4] && squers[4]==squers[7] && squers[4]!=''){
    title_head.innerHTML=`${squers[4]} is winner`
    document.getElementById("item"+4).style.backgroundColor='#000'
    document.getElementById("item"+1).style.backgroundColor='#000'
    document.getElementById("item"+7).style.backgroundColor='#000'
}
else if(squers[2]==squers[5] && squers[5]==squers[8] && squers[8]!=''){
    title_head.innerHTML=`${squers[8]} is winner`
    document.getElementById("item"+8).style.backgroundColor='#000'
    document.getElementById("item"+5).style.backgroundColor='#000'
    document.getElementById("item"+2).style.backgroundColor='#000'
}
else if(squers[3]==squers[6] && squers[6]==squers[9] && squers[9]!=''){
    title_head.innerHTML=`${squers[9]} is winner`
    document.getElementById("item"+3).style.backgroundColor='#000'
    document.getElementById("item"+9).style.backgroundColor='#000'
    document.getElementById("item"+6).style.backgroundColor='#000'
}
else if(squers[7]==squers[5] && squers[5]==squers[3] && squers[3]!=''){
    title_head.innerHTML=`${squers[3]} is winner`
    document.getElementById("item"+7).style.backgroundColor='#000'
    document.getElementById("item"+5).style.backgroundColor='#000'
    document.getElementById("item"+3).style.backgroundColor='#000'
}

else if(squers[1]==squers[5] && squers[5]==squers[9] && squers[9]!=''){
    title_head.innerHTML=`${squers[9]} is winner`
    document.getElementById("item"+1).style.backgroundColor='#000'
    document.getElementById("item"+5).style.backgroundColor='#000'
    document.getElementById("item"+9).style.backgroundColor='#000'
}
}
