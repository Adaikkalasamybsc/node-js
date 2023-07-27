//-----------------buffer----------------
      // var buff=new Buffer.alloc(15)
//console.log(buff)
//buff.write("adaikkalasamy")
//console.log(buff.toString()) 

//var buff=new Buffer.alloc(10,'a')
//console.log(buff)

// buff.write("adaikkalasamy")
// console.log(buff)
// console.log(buff.toString())
// console.log(buff.toString().length)
// var len=buff.write("adaikkalasamy")
// console.log("answer:",buff.toString())

//console.log(len)
//buff.fill(0)
//console.log("answer:",buff.toString())

/* buff.write("mmmmm")
 console.log(buff.toString())
 buff.write("yyy",4)
 console.log(buff.toString())

 for(x of buff.values())
 {
    console.log(x,"    "+String.fromCharCode(x))
 }
 var buff=Buffer.allocUnsafe(50)
 console.log(buff)
 */
var buff=new Buffer.alloc(8)
console.log(buff)
buff.write("thilagaraj")
console.log(buff.toString())
console.log("name length:",buff.toString().length)
var len=buff.write("thilagaraj")
console.log(" buffer length=",len)
for(x of buff.values())
{
   console.log(x,""+String.fromCharCode(x))
}
