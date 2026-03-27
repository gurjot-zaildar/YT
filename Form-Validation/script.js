let username = document.querySelector("#username")
let mail = document.querySelector("#mail")
let pass1 = document.querySelector("#pass-1")
let pass2 = document.querySelector("#pass-2")
let p = document.querySelector("p")
let btn = document.querySelector("button")

btn.addEventListener("click",function(e){
    e.preventDefault()

    let userval = username.value;
    let pass_1= pass1.value;
    let pass_2= pass2.value;

if(userval.length <3 || userval.length >15 ){
    p.innerHTML="username must be between 3 to 15 char";
    return;
}

if(pass_1.length < 3 || pass_1.length>15){
    p.innerHTML="password must be between 3 to 15 char";
    return;
}

if(pass_1!==pass_2){
    p.innerHTML="password must be same as above"
    return;
}

username.value=""
mail.value=""
pass1.value=""
pass2.value=""
p.innerHTML=""

alert("sumited")
console.log("submited")
})