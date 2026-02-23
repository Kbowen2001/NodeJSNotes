//this follows the clients & servers totorial (link in README) How to set up a server using js

const http = require('http'); // this is the built in module for creating a server. It is a core module, so we do not need to install it. We can just require it and use it.        

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

});
   // console.log(req); // this will log the request object, which contains information about the request that was made to the server. It includes properties such as the URL, method, headers, and more. This can be useful for debugging and understanding how the server is handling requests.   
   
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});

//localhost is like a domain name on the web but it points back to your computer
//port numbers are like doors into a computer(the computer needs to be told which door to listen on for incoming requests) The standard port for web servers is 80 (or 3000 for local web development), but You can choose any port number that is not already in use by another application on your computer.

//open a browser and type in http://localhost:3000/ to see the server run (anytime you make a change to this file you need to press cntrl + c to stop the server and then run it again)