const args = process.argv.slice(2);
 
if (args[0] !== undefined) {
    console.log("One argument");
}
else if (args[0,1] !== undefined) {
    console.log("2 arguments");
}
else {
    console.log("No argument");
}