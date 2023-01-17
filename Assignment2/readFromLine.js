
const readline = require("readline");

const use1 = readline.createInterface({
    input : process.stdin,
    output :process.stdout 

});
 
use1.question("Please enter your name:",(name)=>{

    console.log("Hello",name);
    
    use1.close();

})
