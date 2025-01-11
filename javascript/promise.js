function promiseEg(value){
    /*var promise = new Promise(function(resolve,reject){
        resolve("This is a Promise Example");
    });*/

    return new Promise(function(resolve,reject){
        if(value === 1){
            resolve("This is a resolve Promise Example");
        }
        else if(value === 0){
            reject("This is a reject Promise Example")
        }
        
    });

}

//console.log(promiseEg(7)); //Promise { <pending> }
//console.log(promiseEg(0));
promiseEg(0).then((res)=>{
    console.log(res)
}).catch((rej) =>{
    console.log(rej);
})