document.addEventListener("DOMContentLoaded", ()=>{
    console.log("contact page  loaded sucessfully")

    const form =document.querySelector("form");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        alert("Your form is submited Sucessfully");
    });


});

