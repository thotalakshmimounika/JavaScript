
function MounikaAsyncFunction(){
    let p = new Promise(function(resolve){
        resolve("hi there!")
    });
    return p;
}


async function main(){
    const value = await MounikaAsyncFunction();
    console.log(value);
}
console.log("hello world");
main()
console.log("Bye world");

