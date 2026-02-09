const xyz =  require('./people'); //this links to js files 

//to link to just one portion do 
    // const {people} = require('./people'); // this will only import the people array from the people.js file. We can also import the ages array by adding it to the destructuring assignment like this: const {people, ages} = require('./people');

console.log(xyz.people,xyz.ages); 