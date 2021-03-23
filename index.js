const exppres = require('express')

const app = exppres();


app.get('/', (req,res)=>{
    res.send('i know how to open port')
})

app.listen(3000, () => console.log('liste to port 3000'))