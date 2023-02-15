require('dotenv').config()
const express  = require('express')
const app  = express()

app.use(express.json())
app.use('/',(req,res)=>{
    res.send("Server is ruuing fine")
})



app.listen(process.env.PORT,()=>{
    console.log(`Auth server is runnig on port ${process.env.PORT}`)
})