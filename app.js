const express = require('express')
const cors = require('cors')
const app = express()
 
app.use(cors())



app.get('/main',(req,res)=>{
    console.log(req.query)
    res.send('<div style="font-size:5em">MAIN PAGE OF APP</div>')
})



app.get('/login',(req,res)=>{
    console.log('request')
    res.send('<div style="font-size:5em">PLEASE LOGIN')
})


app.listen(2121, ()=>{console.log('app listening on port 2121')})