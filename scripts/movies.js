// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amt=JSON.parse(localStorage.getItem("amount"));
let h1=document.getElementById("wallet");
h1.innerText=amt;

let id;
function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(function(){
        func();
    },delay);
}

async function main(){
    let data=await searchmovie();
   // let data=await res.json();
    if(data==undefined){
        return false;
    }
    console.log("Data:",data);
    appendmovies(data);
    
}
async function searchmovie(){
    var url="https://www.omdbapi.com/?apikey=de58a940&s=";
    let query=document.getElementById("search").value;
    try{
        let res=await fetch(url+query);
        let data=await res.json();
        let movie=data.Search;
         return movie;

    }catch(err){
        console.log("Error:",err);
    }
}
let div=document.getElementById("movies");

function appendmovies(data){
    div.innerHTML=null;
    data.forEach(function(el){
        let grid=document.createElement("div");
    let image=document.createElement("img");
    image.src=el.Poster;
    let title=document.createElement("p");
    title.innerText=el.Title;
    let b=document.createElement("button");
    b.innerText="Book Now";
    b.setAttribute("class","book_now");
    b.addEventListener("click",function(){
        bookmovie(el);
    })
    grid.append(image,title,b);
    div.append(grid);

    });
    

}

function bookmovie(el){
    localStorage.setItem("movie",JSON.stringify(el));
    window.location.href="checkout.html";
}