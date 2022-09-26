const myNumber=document.querySelector(".myNumber");
const btnUp=document.querySelector(".btn_up");
const btnDown=document.querySelector(".btn_down");
const btnReset=document.querySelector(".btn_rs");
let myValue=0;

const IncreasingNumb=function(){
    return ++myValue;
}

const DimNumb=function(){
    return --myValue;
}

const ResetNumb=function(){
    myValue=0;
    return myValue;
}

btnUp.addEventListener("click",(e)=>{
    myNumber.textContent=IncreasingNumb();
    
    if(myValue===0){ 
        myNumber.style.color="black";
    }else{
       
        myNumber.style.color="green";
    }
    if(myValue<0){
        myNumber.style.color="red";
    } 
})
btnDown.addEventListener("click",(e)=>{
    myNumber.textContent=DimNumb();
    if(myValue<0){
    myNumber.style.color="red";
} 
  if(myValue===0) {
    myNumber.style.color="black";
}
})
btnReset.addEventListener("click",(e)=>{
    myNumber.textContent=ResetNumb();
    myNumber.style.color="black";
})