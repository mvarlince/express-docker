import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get('/test', (req, res) => 
    res.send('🐳 Docker is cool'))

const PORT = process.env.PORT || 3030

app.listen(PORT, () =>
console.log(`Listening on port ${PORT}`))