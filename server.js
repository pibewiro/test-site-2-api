const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors())


app.get('/cars', (req, res)=>{
    const cars = [
        {
            id:1111,
            make:'Honda',
            model:'Accord',
            year:'2017',
            price:23000
        },
        {
            id:2222,
            make:'Ford',
            model:'Explorer',
            year:'2017',
            price:21000
        },
        {
            id:3333,
            make:'Ford',
            model:'Taurus',
            year:'2007',
            price:7000
        },
        {
            id:4444,
            make:'Honda',
            model:'Accord',
            year:'2017',
            price:23000
        },
        {
            id:5555,
            make:'Ford',
            model:'Explorer',
            year:'2017',
            price:21000
        },
        {
            id:6666,
            make:'Ford',
            model:'Taurus',
            year:'2007',
            price:7000
        },
    ]
    return res.status(200).json(cars)
})

app.listen(8000, ()=>console.log('Connected to port 8001'))