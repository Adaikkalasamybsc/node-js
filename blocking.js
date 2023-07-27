
// blocking or sync 
{/*var fs1=require("fs")
var data=fs1.readFileSync("inputtext.txt")

console.log("data:",data)
console.log("data:",data.toString())
console.log("program end")*/}

var fs2=require("fs")
var data=fs2.readFileSync( "inputtext.txt")
console.log("answer:",data.toString())
console.log("program end")
