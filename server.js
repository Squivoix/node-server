const express = require('express')
app = express()

const page = `
    <html>
        <head>
            <title>Página</title>
        </head>
        <body>
            <h1>Olá Mundo<h1>
            <h6>Você está num exemplo de página<h6>
        </body
    </html>
`

app.get('/clientes', (req, res) => {
    res.send("João, José, Tiago")
})

app.get('/produtos', (req, res) => {
    res.send("Caneta, Caderno, Carteira")
})

app.get('/pagina', (req, res) => {
    res.send(page)
})

app.listen(8080)