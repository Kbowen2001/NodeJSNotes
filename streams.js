                                    //Streams and Buffers: 
    // (start using data before it has finished loading)
    //buffers pass data a small bit at a time through a stream instead of all at once, this is more efficient for large files. (like when youtube buffers videos)

const fs =  require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
    // this creates a readable stream from the file blog3.txt in the docs directory. The encoding option specifies that the data should be read as a string instead of a buffer. If you omit the encoding option, the data will be read as a buffer by default.

readStream.on('data', (chunk) => {
    console.log('---New Chunk---');
    console.log(chunk);
});
    // this listens for the 'data' event on the readStream. The callback function will be called every time a new chunk of data is available to read. The chunk parameter will contain the data that was read from the file. In this case, we are logging the chunk to the console along with a separator to indicate that it is a new chunk of data.