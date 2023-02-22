const express = require("express");
const notes=require("./data/notes");
require("dotenv").config();

const app =express();


app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/api/notes",(req,res)=>{
    res.json(notes);
})
app.get('/api/notes/:id',(req,res)=>{
    const note = notes.find((ele)=>ele._id===req.params.id);
    res.send(note)
})
const PORT = process.env.PORT||5000
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)})

