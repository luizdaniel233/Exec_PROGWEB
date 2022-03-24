const express = require('express')
const app = express()

const fs = require('fs').promises;
var file = ''

async function listFile(directory){
    let arquivos = [];

    let listFile = await fs.readdir(directory);

    for(let k in listFile) {
        
        let stat = await fs.stat(directory + '/' + listFile[k]);
        if(stat.isDirectory())
            await listFile(directory + '/' + listFile[k], arquivos);
        else
            arquivos.push(directory + '/' + listFile[k]);

    }

    return arquivos;

}

async function test(file,res) {

    let arquivos = await listFile(`./${file}`);
    var cobaia = ''
    let new_a = []


    for(let  i = 0;i < arquivos.length;i++){
        cobaia = arquivos[i].replace('./arquivos/',"")
        new_a.push(cobaia);
    }

    res.send(new_a);

}

process.argv.forEach((val, index) => {
    file = val;
});


app.use('/',(req,res) => {
    test(file,res)
});

app.listen(3000)

