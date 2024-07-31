const express = require('express')

const app = express();

const port = 8000;

let data = [
    {
        "id": 1,
        "name": "John",
        "age": 25
    },
    {
        "id": 2,
        "name" : "kate",
        "age": 30
    }
]

app.use(express.urlencoded());

app.set('view engine','ejs')

app.get('/',(req,res) => {
    return res.render('table',{
        users : data
    })
})

app.get('/add',(req,res) => {
    return res.render('form')
})

app.post('/insertRecord',(req,res) => {
    try {
        const {username,userage} = req.body;
    let obj = {
        id : Math.floor(Math.random()* 10000),
        name : username,
        age : userage
    }
    data.push(obj);
    console.log("Record Successfully Added");
    return res.redirect('/')
    } catch (error) {
        console.log(error);
    }
})

app.listen(port,(err) => {
    if(err){  
        console.log(err);
        return false;
    }
    console.log(`server is start on the port : ${port}`);
})