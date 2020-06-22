const fs = require('fs');
const data = fs.readFileSync('input.txt'); //wait till done
console.log(data.toString());
console.log('Task 1 completed!')

// callback
fs.readFile( //go ahead next instraction
    'input.txt',
    function(err, text) {
        if (err) return console.error(err);
        console.log(text.toString());
    }
    );
console.log('Task 2 completed!')