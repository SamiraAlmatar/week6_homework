function delayPromise(){
    // return a promise reslove value after 1 second delay
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            resolve("success");
        }, 1000);
    });
}

//use as callBack function to Print 
function printer(value){
    console.log(value);
}

delayBySecond = delayPromise();

delayBySecond.then(printer);