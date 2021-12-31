const birthDate = document.querySelector("#birthdate");
const luckyNumber = document.querySelector("#lucky-number");
const browsewBtn = document.querySelector("#btn");
const outputDiv = document.querySelector("#output");

browsewBtn.addEventListener("click", checkForLuck)

function checkForLuck(){
    var bday=birthDate.value;
    const add =sum(bday)
    check(add,luckyNumber.value )
    // if (sum%luckyNumber==0){
    //     console.log("right")
    // }else{
    //     console.log("wrong")
    // }
}


function sum(bday){
    
    bday=bday.replaceAll("-","")
    console.log(bday);
    var add=0;
    for (let index=0;index<bday.length;index++){
         add=add+Number(bday.charAt(index))
        console.log(add)
    }
    return add

}

function check(add, luckyNumber){
    if (sum%luckyNumber==0){
        console.log("right")
    }else{
        console.log("wrong")
    }
    
}