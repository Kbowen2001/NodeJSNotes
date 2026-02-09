//Global Object//To run in terminal type node global 

console.log(global);

global.setTimeout(() => {
    console.log('in the timeout');
}, 3000);