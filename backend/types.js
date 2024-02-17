const zod = require('zod')

const createTodo = zod.object({
    title:zod.string(),
    description:zod.string(),
    duedate:zod.string()
})

const updateTodo = zod.object({
    id:zod.string(),
    duedate: zod.string().optional(),
    completed: zod.boolean().optional()
})

module.exports = {
    createTodo:createTodo,
    updateTodo:updateTodo
}