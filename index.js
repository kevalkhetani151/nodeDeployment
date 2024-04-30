import express from 'express'
const app = express();
app.get("/",(req,resp)=>{
    resp.send({"data":"server working sucessfully"})
})

app.listen(3000,()=>console.log("server is running on 3000"))