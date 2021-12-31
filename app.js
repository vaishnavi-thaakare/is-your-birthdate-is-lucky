const birthDate = document.querySelector("#birthdate");
const luckyNumber = document.querySelector("#lucky-number");
const browsewBtn = document.querySelector("#btn");
const outputDiv = document.querySelector("#output");

browsewBtn.addEventListener("click", checkForLuck)

function checkForLuck(){
    var bday=birthDate.value;
    var add =sum(bday)
    check(add,Number(luckyNumber.value ))
   
}
function sum(bday){
    
    bday=bday.replaceAll("-","")
    
    var add=0;
    for (var index=0;index<bday.length;index++){
         add=add+Number(bday.charAt(index))
        console.log(add)
    }
    return add

}

function check(add, luckyNumber){
    if (add%luckyNumber==0){
       outputDiv.innerText=("right")
    }else{
       outputDiv.innerText=("wrong")
    }
    
}