const express = require('express')
const app = express()

app.get('/makers/:nombre',(req,res) => {
    const nameS = req.params.nombre;
    const nameS2 = nameS.charAt(0).toUpperCase() + nameS.slice(1);
    res.send("<h1>Hola " +nameS2 + "!</h1>");
    
});

app.listen(3000,()=> console.log('Listening on port 3000'));