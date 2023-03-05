const mongoose = require("mongoose");
mongoose.set('strictQuery', true);


module.export  = mongoose.connect(
  `mongodb+srv://Carnel:Vincemeg1997@cluster0.lt3vzdu.mongodb.net/?retryWrites=true&w=majority`
).then((res)=>{
   //console.log(res)
})
