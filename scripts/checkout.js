// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amt=JSON.parse(localStorage.getItem("amount"));
h1=document.getElementById("wallet");
h1.innerText=amt;
let div=document.getElementById("movie");
let data=JSON.parse(localStorage.getItem("movie"));
let image=document.createElement("img");
let title=document.createElement("p");
title.innerText=data.Title;
image.src=data.Poster;
div.append(image,title);
function confirmbook(){
    let seats=document.getElementById("number_of_seats").value;
console.log("seats:",seats);
let n=Number(seats);
let payamt=100*n;
amt=Number(amt);
    if(amt<payamt){
        alert("Insufficient Balance !");
    }
    else{
        amt-=payamt;
        localStorage.setItem("amount",JSON.stringify(amt));
        h1.innerText=amt;
        alert("Booking Successful!");
    }
}
