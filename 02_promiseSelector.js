function promiseSelecter(condition){
    // return resolve or reject promise value based on condition value
    return new Promise(function(resolve, reject){
        if(condition){
            resolve("success");
        }else{
            reject("failure");
        }
    });
}

//use as callBack function to Print
function printer(value){
    console.log(value);
}

ourPromise = promiseSelecter(true);

ourPromise.then(printer).catch(printer);