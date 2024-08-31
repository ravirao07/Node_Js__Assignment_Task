const express = require('express')
const fs = require('fs')
const app = express()
const cors = require('cors')
app.use(cors())
app.get('/',(req,res)=>{
    res.send('Hello Welcome !!')
})
app.get('/getdata',(req,res)=>{
    fs.readFile('./db.json','utf-8',(err,data)=>{
        (err)?res.send(err):res.send(data)
    })
   
})
app.post('/datapost',(req,res)=>{
    let bodydata = "";
    req.on('data',(chunk)=>{
        bodydata += chunk;
    })
    req.on('close',()=>{
        fs.readFile('./db.json',(err,data)=>{
            if(err){
                res.send(err)
            }
            else{
                const newdata = JSON.parse(data)
                newdata.push(JSON.parse(bodydata))
                fs.writeFile('./db.json',JSON.stringify(newdata),(err)=>{
                    if(err){
                        res.send(err)
                    }else{
                        res.send('data saved Successfully')
                    }
                })
            }
                
        })
    })
})
app.put('/dataput/:id',(req,res)=>{
    const {id} = req.params

    fs.readFile('./db.json','utf-8',(err,data)=>{
        if(err){
            res.send(err)
        }else{
            const serverData = JSON.parse(data)
            const index = serverData.findIndex((el)=>el.id==id)
            if(index!=-1){
                serverData[index] = {...serverData[index],...req.body}
                console.log(serverData[index].title)
                fs.writeFile('./db.json',JSON.stringify(serverData),(err)=>{
                    if(err){
                        res.send(err)
                    }else[
                        res.send('Data updated')
                    ]
                })
        }
        res.send()

    }
    })
   
})
app.patch('/datapatch/:id',(req,res)=>{
    const {id}=req.params
    fs.readFile('./db.json','utf-8',(err,data)=>{
        if(err){
            res.send(err)
        }else{
            const serverdata = JSON.parse(data)
            const index = serverdata.findIndex((el)=>el.id==id)
            if(index!=-1){
                serverdata[index] = {...serverdata[index],...req.body}
                fs.writeFile('./db.json',JSON.stringify(serverdata),(err)=>{
                    if(err){
                        res.send(err)
                    }else{
                        res.send('product update is  done')
                    }

                })
            }
        }
})
})
app.delete('/delete/:id',(req,res)=>{
    const {id} = req.params
    fs.readFile('./db.json','utf-8',(err,data)=>{
        if(err){
            console.log(err)
        }else{
            const serverData = JSON.parse(data)
            const index = serverData.findIndex((el)=>el.id == id)
            if(index!=-1){
                serverData.splice(index,1)
                fs.writeFile('./db.json',JSON.stringify(serverData),(err)=>{
                    (err)?console.log(err):console.log('This Data Delete has Succesfull')
                })
            }
        }
    })
})

app.listen(8000,()=>{
    console.log('server is running on port 8000')
})
