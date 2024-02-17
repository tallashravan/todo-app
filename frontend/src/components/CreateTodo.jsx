import { useState } from "react";

export function CreateTodo(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [duedate, setDuedate] = useState("")

    function create(){
        fetch("http://localhost:3000/todo",{
            method: "POST",
            body: JSON.stringify({
                title:title,
                description:description,
                duedate:duedate
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(async function(res){
          const json = await res.json();
          setTodos(json);
        })
    }

    return <div>
        <input type="text" placeholder="Title" style={{padding:10, margin:10}} onChange={function(e){
            setTitle(e.target.value)
        }}/><br/>
        <input type="text" placeholder="Description" style={{padding:10, margin:10}} onChange={function(e){
            setDescription(e.target.value)
        }}/><br/>
        <input type="text" placeholder="Due Date" style={{padding:10, margin:10}} onChange={function(e){
            setDuedate(e.target.value)
        }}/><br/>
        <button style={{padding:10, margin:10}} onClick={create} >Add a todo</button>
    </div>
}