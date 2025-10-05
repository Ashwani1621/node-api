import express from 'express'


const app = express()
app.get('/',(req,res)=>{
    res.send("hello Shreyeshi!")
})
app.get('/gf',(req,res)=>{
    res.send("hello Ashwani..Missing U Love \n-Shreyeshi")
})

const PORT = 3000
app.listen(PORT, () =>{
    console.log(`Server is running at PORT ${PORT}...`)
})