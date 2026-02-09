    //The File System: You can interact with your file system through the command prompts
    //the 'fs' stands for file system.
    //These methods work well for reading smaller js files, if reading from or writing to larger files you want to use streams.

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

//   fs.appendFile('./docs/blog1.txt', '\nHello Again', () => {
//    console.log('file was appended');
//   });

                                //Directories:
  
if(!fs.existsSync('./assets')){ 
    // this will check if the directory already exists before trying to create it. If it does exist, it will not try to create it again and will not throw an error.
    // to create a directory, you can use the fs.mkdir() method like this: 'mkdir' stands for make directory. 'assets' is the name of the directory to create. 
fs.mkdir('./assets', (err) => {
   if(err){
      console.log(err);
   }
   console.log('folder created');
});
    //To delete a directory, you can use the fs.rmdir() method like this:
    // 'rmdir' stands for remove directory. This will delete the directory and all of its contents. with both add and delete you can keep running it to create and delete file depending on if file exists or not.
} else {
    fs.rmdir('./assets', (err) => {
       if(err) {
            console.log(err);
       }
         console.log('folder deleted'); 
})
} 


                                //Deleting Files:

    //''./docs/deleteme.txt' looks for the file named deleteme.txt in the docs directory. If it exists, it will be deleted. If it does not exist, it will throw an error. To avoid this error, you can check if the file exists before trying to delete it like this:
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
         if(err){
            console.log(err)
        }
        console.log('file deleted');
 })
}

                            //Streams:
