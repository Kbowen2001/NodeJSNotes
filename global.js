//Global Object//To run in terminal type node global to see all funcitons available to global object.// to cancel out of a node process, press ctrl + c //

// console.log(global); 


//this function runs once after 3 seconds//
setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int); // will run every second until hits 3 seconds//
}, 3000);

//this funciton runs every 1 second//
const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

