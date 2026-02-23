//this follows the clients & servers totorial (link in README) How to set up a server using js

const http = require('http'); // this is the built in module for creating a server. It is a core module, so we do not need to install it. We can just require it and use it.        

const server = http.createServer((req, res) => {
    console.log('request made');

});
   // console.log(req); // this will log the request object, which contains information about the request that was made to the server. It includes properties such as the URL, method, headers, and more. This can be useful for debugging and understanding how the server is handling requests.   
   
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
}