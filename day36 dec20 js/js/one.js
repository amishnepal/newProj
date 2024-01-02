var fname
var lname
fname='Amish'
lname='Nepal'
console.log('Hello, I am ' + fname + ' and my last name is ' + lname + '.');
console.log(`hello I am ${fname} and last name is ${lname}`)

var fullname='ashok'
console.log('>',fullname)
//var => re dclared and re assign

var fullname='ppppp'
console.log('>',fullname)

//let no re-declared and can be re assign
let ffname='ashok'
console.log('>',ffname)
  ffname='pppp'
console.log('>',ffname)

//const no re dclared and no re assign
const llname='ashok'
console.log('>',llname)
//llname='ashok'
console.log('>',llname)

let age=16
console.log(age)//16
if(true){
    let age=14
    console.log(age)//14
}

console.log(age) //16
