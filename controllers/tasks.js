const Task = require('../models/tasks')

module.exports = {
    index: (req, res) => {
        Task.find({}).then((tasks) => {
                res.render("todo.ejs", {todos: tasks})
        })
    },
    create: (req,res)=>{
        const newone = new Task({ title: req.body.title })
        newone.save().then(() => res.redirect('/'))
    },
    edit: (req, res) => {
        const id = req.params.id
        Task.find({}).then((tasks) => {
            res.render("TodoEdit.ejs", {todos: tasks, id:id})
        })
    },
    update: (req, res) => {
        const id = req.params.id
        Task.findByIdAndUpdate(id,{title: req.body.title}).then(() => {
            res.redirect("/")
        })
    },
    delete: (req, res) => {
        Task.deleteOne({_id:req.params.id}).then((r) => { 
            res.redirect("/")
        }) 
    },
}