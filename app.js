const express = require('express')
const mongoose = require('mongoose')
const app = express()
const methodOverride = require('method-override')
const router = require('./routes/tasks')

app.set("view engine","ejs")

app.use(methodOverride('_method',{methods: ['POST','GET']}))
//middleware for view
app.use(express.urlencoded({extended: true}))

mongoose.connect('mongoDBURL',{useNewUrlParser: true,
useUnifiedTopology: true })

app.use('/',router)

//port 
app.listen(3000,()=>console.log("Express started"))





