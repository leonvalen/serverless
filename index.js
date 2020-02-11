const express = require ('express')
const app = express()

app.get('*', (req, res) => {
    //console.log('Hola ... mi primera app serverless');
    res.send({ mensaje: 'Chanchito Feliz'})
})

//module.exports = app
app.listen(3000, () => console.log('Listening on por 3000'))