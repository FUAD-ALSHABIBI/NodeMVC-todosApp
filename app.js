const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.set("view engine","ejs")

//middleware for view
app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb+srv://FFF:nKiJ0S3NHJvj1xp1@cluster0.3riqmft.mongodb.net/Todos',{useNewUrlParser: true,
useUnifiedTopology: true })

const schema = new mongoose.Schema({title:String})
const Task = mongoose.model("Task",schema)

//insert 
app.get('/create/:title',(req,res)=>{
    const firstTask = new Task({ title: req.params.title })
    firstTask.save().then(() => console.log("done"))
    res.send("nice")
})


//find/show
app.get('/', (req, res) => {
    let task = []
    Task.find({}).then((tasks) => {
        tasks.forEach(element => {
            task.push({_id: element._id, title: element.title})
        });
           console.log(task)
            res.render("todo.ejs")
    })
   

})

//delete
app.get("/delete/:id", (req, res) => {
    Task.deleteOne({_id:req.params.id}).then((r) => {
        res.send(r.deletedCount === 1? "Done": "err")
    })
   

})

//update
app.get("/update/:id/:title", (req, res) => {
    Task.updateOne({_id:req.params.id}, {title:req.params.title}).then((r) => {
        console.log(r);
        res.send(r.matchedCount === 1? "Done": "err")
    })
   

})


//port 
app.listen(3000,()=>console.log("Express started"))



// //show a page
// app.get('/',(req,res)=>res.send("<p>FF App <p/>"))



