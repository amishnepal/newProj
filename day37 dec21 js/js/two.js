//Data types
var a='sajan'
console.log(typeof a)

var b=3.3
console.log(typeof b)

var c=false
console.log(typeof c)

var d=null
console.log(typeof d)

var e;
console.log(typeof e)

console.log(Symbol('sajan')==Symbol('sajan'))

var fruits=['mango','mango','mango',2,true]
console.log(typeof fruits)

var obj={
  id:1,name:"sajan",ph:11111
}
console.log(typeof obj)

var a,b;
a=3; b=4;

// console.log("a+b=",a+b)
// console.log(`a+b= ${a+b}`)
// console.log(`a-b= ${a-b}`)
// console.log(`a*b= ${a*b}`)
// console.log(`a+b= ${a/b}`)
// console.log(`a+b= ${a%b}`)
// console.log(a++)
// console.log(a--)
// console.log(a)
// console.log()


//Assignment operator
console.log(a+=b)
console.log(a-=b)
console.log(a*=b)
console.log(a/=b)
console.log(a%=b)


var x=3; var y=4; var z=3;
console.log(x==z)
console.log(x===z)
console.log(4>1)
console.log(4<1)
console.log(4>=4)

//Logical Operators
console.log(('admin'=='admin')  && ('pass'=='pass'))
console.log(('admin'=='admin1') || ('pass'=='pass'))
console.log(!true)
