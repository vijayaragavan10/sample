const express=require('express')
const app=express()
app.set('view engine','pug')
app.set('views','./views')
app.get('/hello',(req,res)=>{
    res.render('hello',{})  
})
app.get('/welcome',(req,res)=>{
    const user='john'
    res.render('welcome',{user})
})
app.get('/form',(req,res)=>{
    res.render('login'),{}
})

app.listen(8081,()=>{
    console.log('server is listening at port 8081')
})