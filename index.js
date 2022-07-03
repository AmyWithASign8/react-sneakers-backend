import express, { json } from 'express';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello Frontend!");
});

app.post("/sneaker", (req, res) => {
    res.json({
        success:true
    });
});

app.listen(4444, (err) =>{
    if (err){
        return console.log("err");
    }else{
        console.log("Server OK");
    }
});
