let date = new Date()
const Datee=(req,res,next)=>{


let d=date.getDay()

   let  h=date.getHours()
if(!(d>= 1 && d<=5 && h>=9 && h<=12)){
 res.send("out of service !")
}
next()

}

module.exports=Datee