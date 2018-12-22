function promiseTimeOut(time){
    // return a promise reslove value after x second delay
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            resolve("success");
        }, time);
    });
}

//used as callBack function to Print 
function printer(value){
    console.log(value);
}

delayByXTime = promiseTimeOut(5000);

delayByXTime.then(printer);