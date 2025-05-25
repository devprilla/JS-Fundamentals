const args = process.argv.slice(2);
 
args[0] = 1;
args[1] = 2;
if(args[0] && args[1] !== undefined) {
    console.log("args[0]" + " is " + 1 );
    console.log("args[1]" + " is " + 2 );

}



