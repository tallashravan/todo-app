const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const {todo} = require('./db/schema.js')
const zod = require('zod')
const {createTodo,updateTodo} = require('./types.js')
const cors = require('cors')


const app = express()
app.use(bodyparser.json())
app.use(express.json());
app.use(cors());


app.post('/todo',async function(req,res){
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid request body"
        })
        return
    }
    // put into mongodb
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        duedate:createPayload.duedate,
        completed:false
    })
    res.json({
        msg: "Todo created successfully!"
    });
})

app.get('/todos',async function(req,res){
   const allTodos = await todo.find({});
    res.json({
        allTodos
    })
})

app.put('/todo', async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(401).json({
            msg: "Invalid request data"
        })
        return;
    }
    const toUpdate = {}
    if(updatePayload.completed){
        toUpdate.completed = true
    }
    if(updatePayload.duedate){
        toUpdate.duedate = updatePayload.duedate
    }
    const response = await todo.updateOne({_id:updatePayload.id},{completed:toUpdate.completed,duedate:toUpdate.duedate});
    let msg;
    if(response.modifiedCount>0){
        msg = "Todo updated successfully!"
    }else{
        msg = "Todo not found"
    }
    res.json({
        msg:msg
    });
})

app.listen(3000,function (){
    console.log("Listening......")
})