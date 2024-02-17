export function Todos({ todos }) {
    return <div>
        {todos.map(function (todo) {
            return <div>
                <span>Title: </span><span>{todo.title}</span><br/>
                <span>Description: </span><span>{todo.description}</span><br/>
                <span>Due Date: </span><span>{todo.duedate}</span><br/>
                <span>Completed?: </span>{todo.completed == true? "True" : <button>Mark as completed</button>}
            </div>
        })
        }
    </div>
}