const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Anderson Alex Durante"
    })
})

app.listen(3333)