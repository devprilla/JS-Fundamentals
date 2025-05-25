const args = process.argv.slice(2);
 
args[0] = "Python";
args[1] = "fun";
args[2] = null;
if(args[0] && args[1] !== undefined) {
    console.log(args[0] + " is " + args[1]);
    console.log(args[0]);

}



