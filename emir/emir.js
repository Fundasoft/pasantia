console.log("emir");

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("err")), 1000);
});

promise.then(
    result => alert(result),
    error => alert(error) 
);
console.log("Hello World");

console.log("sarasa")