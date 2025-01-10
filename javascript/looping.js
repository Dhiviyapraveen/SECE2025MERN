/*
two kinds of looping 
1.normal looping
->for
->while
->do...while
2.advance looping
->for in
->for for of
->for each
*/
//for in loop

var a=[10,20,30]
var b={"count":70,"abs":1}
/*
for(let i in b){
  console.log(i,b[i])
}
*/
//set= new Set(["hello",1,2,"SECE","44","hello","sece",5])
//for(let i in set){
    //console.log("running")
    //console.log(i)
//}

//for loop
//for(let i of b){
// console.log(i)
//}
for(let[i,j] of object.entries(b)){
    console.log(i,j)
  }