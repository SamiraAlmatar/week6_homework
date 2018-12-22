function promiseSelecter(condition){
    return new Promise(function(resolve, reject){
        if(condition){
            resolve("success");
        }else{
            reject("failure");
        }
    });
}

function printer(value){
    console.log(value);
}

ourPromise = promiseSelecter(true);

ourPromise.then(printer).catch(printer);