console.log(`Process Architecture: ${process.arch}`);  
console.log(`Process PID: ${process.pid}`);  
console.log(`Process Platform: ${process.platform}`);  
console.log(`Process Version: ${process.version}`);  
//
console.log(`Comand line ags ${process.args}`)
console.log(`Process env: ${process.env}`);
console.log(`Process Release: ${process.release}`); 

process.argv.forEach((value, index, array) => {  
    console.log(`${index}: ${value}`);  
  });  
 
  console.log(`Current directory: ${process.cwd()}`);  
  console.log(`Uptime: ${process.uptime()}`);  
  console.log(`MemoryUsage: ${process.memoryUsage()}`);
  console.log(`High resolution real time: ${process.hrtime()}`);  
  
