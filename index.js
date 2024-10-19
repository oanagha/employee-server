require('dotenv').config()

const express=require('express')
const cors=require('cors')
const router=require('./Routes/route')
require('./connection/db')
const empServer=express()

empServer.use(cors())
empServer.use(express.json())
empServer.use(router)

const PORT=3000 || Process.env.PORT

empServer.listen(PORT,()=>{
            console.log(`server running at : ${PORT}`);
            
})