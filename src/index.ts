import express from 'express'
import {json} from 'body-parser'

const app=express();
app.get('/', (req,res) => res.send('Express + TypeScript Server'));
app.listen(3000,()=>{console.log("Server is Listening on port 3000");});

console.log("hello");

