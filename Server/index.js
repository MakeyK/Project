const express = require("express")
const PORT = process.env.PORT || 3100
const cors = require('cors')
const router = require('./Routes/index')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/mak', router)

const start = async() =>
{
    try
    {
        app.listen(PORT, () => console.log(`Сервер запущен. Порт: ${PORT}`))
    }
    catch(e)
    {
        console.log()
    }
}
start()