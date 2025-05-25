const args = process.argv.slice(2);
 
if (args[0] !== undefined) {
    console.log([0]);
}
else if (args[0,1] !== undefined) {
    console.log([0,2]);
}
else {
    console.log("No argument");
}