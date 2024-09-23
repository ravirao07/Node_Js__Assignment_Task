const express = require('express')
const connecting = require('./db')
const userRoute = require('./Controller/routes/user.routes')
const app = express()
const cors = require('cors')
const port = 8000
app.use(cors())
app.use(express.json())
app.use('/user',userRoute)

app.listen(port,async()=>{
    try {
        await connecting
        console.log('>>>>>>>>>> Connect db <<<<<<<<<<<')
        console.log(`server is running on port ${port}`)
        console.log('')
    } catch (error) {
        console.log(error)
    }
    
    
})