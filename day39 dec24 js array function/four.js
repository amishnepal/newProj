//function is a block of code that performs a specific task.

//Declaring a function

function abc()
{
    console.log('Declaring a Function')
}

//calling a function
abc()
console.log('something')

//function with argument & parameter
function wlc(a='std',ph=555){//parameter
    console.log('wlc',a,ph)
}

wlc('ashok',987654)
wlc('ram')
wlc('sita')

function tshirt(payment){
    return payment
}

var e=tshirt(2000)
console.log(e)
console.log(tshirt(2200))


// function sum(){
//     var a=parseInt(prompt('Enter first number'))
//     var b=parseInt(prompt('Enter second number'))
//     console.log(a,"+",b,"=",a+b)
// }

// sum()

// var aa=parseInt(prompt('Enter first number'))
// var bb=parseInt(prompt('Enter second number'))
// function sum(a,b){
//     return a+b
// }

// console.log(sum(aa,bb))

var abc=function(){
    return "Function expressions"
}
console.log(abc())

//es6 arrow function
var subb=a=>a*a;
console.log(subb(44))

var egh=(a,b)=>a*b;
console.log(egh(4,5))

var hjk=(a,b)=>{
    return a*b;
}

console.log(hjk(4,5))

//array in js
var abcd=['apple','ball','cat']
var mm=new Array('apple','ball','cat')

for (var a=0; a<3;a++)
{
    console.log(abcd[a])
}

for (const z of abcd){
    console.log("for of",z)
}

//add an element to an array
abcd.push('sajan')
console.log(abcd)
abcd.unshift('kafle')
console.log(abcd)
//remove an element to an array push, unshift
abcd.pop()
console.log(abcd)
abcd.shift()
console.log(abcd)
abcd[2]='aaaa'
console.log(abcd)
console.log(abcd.sort())
console.log(abcd.join('-'))



