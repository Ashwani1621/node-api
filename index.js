import express from 'express'


const app = express()
let gfs = []
let id = 0

// handle json data gracefully
app.use(express.json());

// get all gfs
app.get('/gfs',(req, res)=>{
    res.status(200).send(gfs)
})

// add gf
app.post('/gf',(req,res)=>{
    const {name, age} = req.body
    const newGf = {id: id++, name, age}
    gfs.push(newGf)
    res.send(newGf)
})

// get that gf
app.get('/gf/:id',(req,res)=>{
    const gf = gfs.find((gf)=> gf.id === parseInt(req.params.id))
    if(!gf){
        res.status(404).send("Gf not found")
    }
    
    res.status(201).send(gf)
})
// update that gf
app.put('/gf/:id',(req,res)=>{
    const gf = gfs.find((gf, index)=> gf.id === parseInt(req.params.id))
    if(!gf){
        res.status(404).send("Gf not found")
    }
    const {name, age}  = req.body
    gf.name = name
    gf.age = age

    res.status(200).send(gf)
})

// dump that bitch
app.delete('/gf/:id', (req, res)=>{
    const index = gfs.findIndex((gf)=>
        gf.id === parseInt(req.params.id)

    )
    
    if(index === -1){
        res.status(404).send("Gf not found")
    }
    const bitch = gfs[index].name
    gfs.splice(index, 1)
    res.status(201).send(`Dumped ${bitch}`)
})


const PORT = 3000
app.listen(PORT, () =>{
    console.log(`Server is running at PORT ${PORT}...`)
})