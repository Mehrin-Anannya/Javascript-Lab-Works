//console.log(welcome);
//how to create promise - pending, resolve, reject
const promise1 = new Promise((resolve, reject)=>{
    let completedPromise = true;
    if(completedPromise){
        resolve("completed promise 1");
    } else{
        reject("rejected promise 1");
    }
});
console.log(promise1);

promise1
.then((res) => {
    console.log(res); // when promise is resolved
})
.catch((err) =>{
    console.log(err); // when promise is rejected, why?
});

//console.log(end);

