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
console.log(data.toString()); 
    // this will convert the buffer data to a string and log it to the        console.
}); 

console.log('last line'); 
    // this will log before the file is read because the readFile function is asynchronous. This means that the code will continue to run while the file is being read, and the callback function will be called once the file is read. basically it will run code from top to bottom but if one takes too long it will just move to the next line to run.  

                                //Writing files:
fs.writeFile('./docs/blog1.txt', 'Hello World', () => {
    console.log('file was written');
});

// if the file does not exist, it will be created. If the file does exist, it will be overwritten. To append to a file instead of overwriting it, you can use the fs.appendFile() method like this:

fs.appendFile('./docs/blog1.txt', '\nHello Again', () => {
    console.log('file was appended');
});

    //Directories:

    //Deleting Files: