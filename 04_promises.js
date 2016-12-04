function _myPromiseCreator() {
   
    const myPromise = new Promise(function (resolve, reject) {
        reject('error')
    }); 

    return myPromise;
}

_myPromiseCreator().then(function(resolvedValue) {
    console.log('resolvedValue ', resolvedValue);
})
.catch(function(rejectedValue) {
    console.log('rejectedValue ', rejectedValue);
})
