//Global Object//To run in terminal type node global to see all funcitons available to global object.//

// console.log(global); 


//this function runs once after 3 seconds//
setTimeout(() => {
    console.log('in the timeout');
}, 3000);

//this funciton runs every 1 second//
const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

