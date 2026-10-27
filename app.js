const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const path = require("path")

app.use(express.static(path.join(__dirname, "public")))

app.get("/api/saludos", (request, response) => {
    response.json({ mensaje: "Hola desde mi app FAG" })
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
