const express = require('express');
const app = express();
const users = [
    {id:1, name:'salvar', qiymet:50, say:3},
    {id:2, name:'canta',qiymet:30, say:8},
    {id:3, name:'t-shirt',qiymet:40, say:2},
    {id:4, name:'papaq',qiymet:20, say:3},
    {id:5, name:'elcek',qiymet:10, say:7},
    {id:6, name:'sharf',qiymet:20, say:3},
    {id:7, name:'utu',qiymet:150, say:6},
    {id:8, name:'qutu',qiymet:25, say:4},
    {id:9, name:'ayaqqabi',qiymet:80, say:9},
    {id:10, name:'qolbaq', qiymet:35, say:11},
]
app.get('/', (req,res)=>{

    res.send("home page")
})

app.get('/users', (req,res)=>{
   
    res.send(users)
})
app.get('/users/:id', (req,res)=>{
    const userID = req.params.id;
    const selectedUser = users.find(user=>user.id == userID)
    if(selectedUser){

        res.send(selectedUser)
    }else{
        res.status(404).send('istifadeci yoxdur')
    }
})

app.listen(4000, ()=>{
    console.log("server quruldu");
})
  