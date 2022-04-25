// Store the wallet amount to your local storage with key "amount"
let amt=JSON.parse(localStorage.getItem("amount")) || 0;
let h1=document.getElementById("wallet");
h1.innerText=amt;
function addtowallet(){
    let inamt=document.getElementById("amount").value;
    amt+=Number(inamt);
    localStorage.setItem("amount",JSON.stringify(amt));
    h1.innerText=amt;
}
function goto(){
    window.location.href="movies.html";
}
