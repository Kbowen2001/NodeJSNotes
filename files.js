    //The File System: You can interact with your file system through the command prompts
    //the 'fs' stands for file system.

const fs =  require('fs'); 

    //Reading files:
fs.readFile('./docs/blog1.txt', (err, data) => {
   if(err){
      console.log(err);
   }

    //Writing files:

    //Directories:

    //Deleting Files: