//find area of triangle using Heron’s Formula

let a =Number(prompt("enter a side"))
let b =Number(prompt("enter b side"))
let c =Number(prompt("enter c side"))

let s=(a+b+c)/2

if(a+b<=c || a+c<=b || b+c<=a){
 console.log("not possible")
}else{
    console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)))
}