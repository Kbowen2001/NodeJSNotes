    // const xyz =  require('./people'); //this links to js files 

    //to link to just one portion do 
const {people,ages} = require('./people'); 
    // this will only import the people array from the people.js file. We can also import the ages array by adding it to the destructuring assignment like this: const {people, ages} = require('./people');

console.log(people, ages); 

const os = require('os'); 
    // this is a built-in module that comes with Node.js. It provides operating system-related utility methods and properties.

console.log(os.platform(), os.homedir()); 
    // this will log the platform and the home directory of the current user. The os.platform() method returns a string identifying the operating system platform, while os.homedir() returns the home directory of the current user.