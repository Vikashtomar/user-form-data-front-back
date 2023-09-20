 import express from 'express'
 import cors from 'cors'
 import connection from './db/connection.js'
 import user from './Models/formSchema.js'
 const app = express()

 app.use(cors({origin:"http://localhost:5173"}))
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))

 
//Sending data to mongoDb

 app.post("/form", async(req,res)=>{
    console.log("Recevied Post request at form route");
    // console.log(req.body)
    const { username,email,password,number} = req.body;

    // console.table(username,email,password,number)
    const newdata = new  user({
        username,email,password,number
    })
    let savedata =  await newdata.save()
    console.log(savedata)
    res.send({status:200,message:"hello sween "}) 

})

// Sending data to front End

app.get("/getAllUsersData", async(req,res)=>{
   const usersData = await user.find({})
   console.log(usersData)
   res.send({status:200,message:" Data aa chuka ha ",usersData:usersData}) 


   
})

connection.then(()=>{
    app.listen(8080,()=>{
console.log("Server is listening at 8080...");
    });
});