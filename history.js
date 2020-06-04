// JS scripting in history

// 20 years ago
const salute = function ( name ){
    console.log("Hello ", name, "!");
};
salute("World");

//then before 16 years callbacks are
const callFunction = function (callback) {
    callback("wOrld");
};
callFunction(salute);

//JSON era before 10 years
const user = {
    "first-name": "Jane",
    "last-name": "Doe",
    age: 49
};

const callJSON = (callback, name) => {
    callback(name);
}

callJSON(salute, user["first-name"]);

//JS object before 7 years
const man ={
    firstName: "Dima",
    lastName: "Dennys",
    age: 49,
    sayHello: function (){
        console.log("Hello " + this.firstName +"!")
    }
}

man.sayHello();

//Present market 2020

const http = require('http');
const PORT = 1337;

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world!');
});

server.listen(PORT);

console.log('Server is listening on port ', PORT);