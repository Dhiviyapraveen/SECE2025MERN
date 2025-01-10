
async function asAw(){
    setTimeout(() => {
        //return("inside timeout");
    },5000)
     return"this is async/await example"
}
asAw().then(function(output){
   console.log(output)
})