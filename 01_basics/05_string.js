let name = "javascript"
let repoCount = 50

//console.log(name + repoCount + " value");// outdate syntax

console.log(`My name is ${name} abd my repo count is ${repoCount} `);

const gameName = new String('javascript');

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('r'));

const anotherString = gameName.substring(0, 5)
console.log(anotherString);

const newString = gameName.slice(-8, 5)
console.log(newString);

const newStringOne = "      html      "
console.log(newStringOne);
console.log(newStringOne.trim());
