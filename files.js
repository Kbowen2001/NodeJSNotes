    //The File System: You can interact with your file system through the command prompts
    //the 'fs' stands for file system.

const fs =  require('fs'); 

    //Reading files:
    //'err' is for error
fs.readFile('./docs/blog1.txt', (err, data) => {
   if(err){
      console.log(err);
   }
   // console.log(data); //this is the buffer data
    console.log(data.toString()); // this will convert the buffer data to a string and log it to the console.
}); 

    //Writing files:

    //Directories:

    //Deleting Files: