const express = require('express')
const app = express()


app.use("/",(req,res) => {
    const ob = {element : ['express','hello.txt','sails.js','tRex.png','texte.txt'] }
    res.send(ob.element)
})

app.listen(3000,() => console.log("Porta 3000"))