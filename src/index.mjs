import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// 1.Q) Reverse the String
/*
//solving using method 
function reversestr(str){
const arr = str.split("");
arr.reverse();
str = arr.join("");
console.log(str);
}
reversestr("Apple"); //=>elppA
*/
//2nd way:

// solving using loop
function reverseStr(str) {
  let reverse = '';
  for(let charector of str){
    reverse = charector + reverse;
  }
  console.log(reverse);
}
reverseStr("Rajnish")
