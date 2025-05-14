import express from "express";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config()
const app=express();

// port 
const port =process.env.PORT || 8000

// middlewares
app.use(express.json())
app.use(cors())

// server runnning
app.listen(port,()=>{
  console.log(`Server is running at port : http://localhost:${port}`)
})