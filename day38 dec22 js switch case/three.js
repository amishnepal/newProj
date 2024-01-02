// var aa=parseInt(prompt('Enter number'))
// if(aa>=90){
//     console.log("u have passed exam")
// }
// else if(aa>=80){
//     console.log(A++)
// }
// else{
//     console.log("fail")
// }

// var a=2;
// switch(a){
//     case 1:console.log("Today is sunday");break;
//     case 2:console.log("Today is Monday");break;
//     case 3:console.log("Today is Tuesday");break;
//     default:console.log("Error")
// }

//ternary operator
// var a=2
// console.log(a<1? "Its true": "Its false")

//for,while,do while,for of,for in,continue,break

console.log("loop start")
for(var a=0; a<10; a++)
{
    if (a==3){
        console.log("3")
        break;
    }
    console.log("for loop", a)
}

console.log("loop end")

var b=0;
while(b<10){
    console.log("while loop",b)
    b++
}

var c=10;
do{
    console.log("do while",c)
    c++
}while(c<10)