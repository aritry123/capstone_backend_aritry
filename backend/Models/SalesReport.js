const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://aritry123:AritryMongo10@cluster0.h0xjooq.mongodb.net/?retryWrites=true&w=majority").then((res)=>console.log("Connected to db sale!")).catch((e)=>console.log("Error in connection: ",e))
const salesReportModel=mongoose.model("FinalSalesReport",{
    userEmail:{
        type:String,
        required:true
    },
    productTitle:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productQuantity:{
        type:Number,
        required:true
    },
    orderDateTime:{
        type:String,
        // required:true
    }
})
module.exports=salesReportModel