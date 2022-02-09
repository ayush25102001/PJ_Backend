require('./db/mongoose.js')
//const cors=require('cors')
const express=require('express')
const app=express()
//app.use(cors())
const port=process.env.PORT || 5000
app.use(express.json())
 

const projectRoute=require('./routes/project')
app.use(projectRoute)

const userRoute=require('./routes/user')
app.use(userRoute)


app.listen(port,()=>{
    console.log("Server started")
})
