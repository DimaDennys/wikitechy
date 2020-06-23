// set timers
// setImmediate
// setInterval
//setTimeout
// Clear timer functions
// clearImmediate(immediateObject)
// clearInterval(intervalObject)
//clearTimeout(TimeoutObject)

var i = 0;

console.log(i, 'shout be zero')
var interval = setInterval( function(){
    i++;
    console.log(i, 'loop');
},1000);

setTimeout(function() {   
    console.log("setTimeout: Hey! 1000 millisecond completed!..");  
    }, 1000);  

    var recursive = function () {  
        r++;
        console.log("recursive Hey! 1000 millisecond completed!..");   
        setTimeout(recursive,1000);
    }  
    recursive();   
    
    function welcome () {  
        console.log("Welcome to wikitechy!");  
      }  
      var id1 = setTimeout(welcome,1000);  
      var id2 = setInterval(welcome,1000);  
      //clearTimeout(id1);  
      clearInterval(id2); 

      clearInterval(interval)