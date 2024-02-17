const mongoose = require('mongoose');

mongoose.connect("{mongodbconnectionurl}")
const toDoSchema = new mongoose.Schema({
    title: String,
    description: String,
    duedate: String,
    completed: Boolean
})

const todo = mongoose.model("todos", toDoSchema);
module.exports = { todo }