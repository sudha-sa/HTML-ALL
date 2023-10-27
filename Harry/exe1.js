//guess no.
let a = Math.random() * 100;
a = Number.parseInt(a);
let inp;
let score = 100;

while(inp != 100){
    // score = score - 1;
    inp = prompt("enter the number : ");
    if(inp == a){
        console.log("congratulations! you guess the correct no.");
        console.log(`you guess the actual no. in ${100 - score} chances. `);
    }
    else if(inp > a && inp <100){
        console.log("your no. is greater than actual no.")
    }
    else if(inp < a && inp >0){
        console.log("your no. is smaller than actual no.")
    }
    else{
        console.log("enter no. between 1 to 100")
    }
}

 