var x =0

for(i = 0; i <= 5; i++){
    x++;
    console.log("This is a for loop, x = ", x)
}

//---
x= 0;

while (x!=5){
    x++;
    console.log("This is a WHILE loop, x = ", x)
}

//---
x= 0;

do{
    x++;
    console.log("This is a DO{}WHILE(cond) loop, x = ", x)
} while(x!=4);

//---
const a = [1,2,3,4,5,6]

a.forEach(x => {
    console.log('forEach loop, Value of x is', x)
})

//---

