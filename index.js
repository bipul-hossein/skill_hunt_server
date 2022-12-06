const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000;

app.use(cors())

const courses = require('./Data/product.json')

app.get('/', (req, res)=>{
    res.send('assignment 10 server is running')
});

app.get('/courses', (req, res)=>{
    res.send(courses);
});
app.get('/category', (req, res)=>{
    res.send("Go to next step");
})

app.get('/course/:id', (req, res)=>{
    const id = req.params.id;
    const getEveryItem = courses?.find((product) => product.id ==id);
    if (!getEveryItem){
        res.send('No Data Found')
     
    }
    res.send(getEveryItem);
})
app.get('/course/:id/details', (req, res)=>{
    const id = req.params.id;
    const getEveryItem = courses?.find((product) => product.id ==id);
    if (!getEveryItem){
        res.send('No Data Found')
     
    }
    res.send(getEveryItem);
})


app.get('/category/:name', (req, res)=>{
    const name = req.params.name;
    const getEveryItem = courses?.filter((product) => product.category == name);
    if(!getEveryItem){
        res.send('No Category Found')
        
    }
    res.send(getEveryItem)
})


app.listen(port, ()=>{
    console.log('localhost:5000 is running');
})
