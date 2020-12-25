//variables
let divContainer= document.createElement("div");
let gridNumber;
let gridReset= document.createElement("button");
let brek=document.createElement("br");

//variable stylings
divContainer.id="container"
divContainer.style.border="1px solid black";
divContainer.style.width="320px";
divContainer.style.height="320px";
divContainer.style.display="grid";
divContainer.style.gridTemplateColumns=`repeat(16, 1fr)`;
divContainer.style.gridTemplateRows=`repeat(16, 1fr)`;
divContainer.style.backgroundColor="white"

gridReset.id="reset";
gridReset.textContent="Reset Grid";

//functions
function oneDiv(){
    
    let cont=document.getElementById("container");

    let div= document.createElement("div");
    div.style.border="1px solid black";
   div.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor= "black";}); div.setAttribute("class","firstdivs");
    

    cont.appendChild(div);
   
} 

//placing on display
document.body.appendChild(gridReset);
document.body.appendChild(brek);
document.body.appendChild(divContainer);

//function taking effect
for (let i=0; i<256; i++) {

    oneDiv();


    }








let reset= document.getElementById("reset");
reset.addEventListener("click",resetWholeGrid)

function resetWholeGrid(){

    divContainer.innerHTML="";

let gridNumber= Number(window.prompt("Type a number between 0 and 100 to affect the pixel area for drawing", ""));
let gridArea= gridNumber*gridNumber;



divContainer.style.gridTemplateColumns=`repeat(${gridNumber}, 1fr)`;
divContainer.style.gridTemplateRows=`repeat(${gridNumber}, 1fr)`;


function oneDiv(){
    
    let cont=document.getElementById("container");

    let div= document.createElement("div");
    div.style.border="1px solid black";
   div.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor= "black";}); div.setAttribute("class","firstdivs");
    

    cont.appendChild(div);
   
} 



//function taking effect

if(100<gridArea&&gridArea<0){
    return alert("You must choose only a number between 0 and 100!");
}
 

        for (let i=0; i<gridArea; i++) {
            oneDiv();
    }


    


}


