const express = require ('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Tudo ok!")
})


app.listen(3001);