document.addEventListener("DOMContentLoaded",()=>{
console.log("Carrers page loaded sucessfully");


const buttons=document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        alert("thank you for your interest!");
    });

    });
    
});