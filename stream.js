var fs = require("fs");
var data = '';
// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});
readerStream.on('end',function(){
   console.log('line 14 ',data);
});
readerStream.on('error', function(err){
   console.log(err.stack);
});
readerStream.on('finish', function(){
    console.log('Line 20 The data has been flushed to the underlying stream')
})
console.log("Line 22 Reading Ended");

data = 'Simply Easy Learning';
// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');
// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');
// Mark the end of file
writerStream.end();
// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Line 33 Write completed.");
});
writerStream.on('error', function(err){
   console.log(err.stack);
});
writerStream.on('finish', function(){
    console.log('Line 39 The data has been flushed to the underlying stream')
})
console.log("Line 41 Writing Ended");


////
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("Line 52 File Compressed.");

