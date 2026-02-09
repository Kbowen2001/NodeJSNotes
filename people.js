const people = ['mario', 'luigi', 'yoshi', 'toad'];
const ages = [20, 25, 30, 35];


//  module.exports = people; // this allows us to export the people array to other files. We can also export functions, objects, etc.

console.log(people);
module.exports = 'hello'; // this will export the string 'hello' instead of the people array. When we import this module in another file, we will get 'hello' instead of the people array.

module.exports = {
   people, ages
};
