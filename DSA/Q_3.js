// find compound intrest 
//formula CP = A-P
//A= P*(1+ r/100)^t

let p = Number(prompt("enter p"));
let r = Number(prompt("enter rate"));
let t = Number(prompt("enter time"));

//CP= A-P
console.log(p*Math.pow((1+ r/100),t) - p)