import express from "express";

const app = express();
const port = 3000;


app.get("/", (req, res)=>{
  res.send("你好")
});


app.listen(port, ()=>{
  console.log("伺服器已啟動 http://localhost:3000");
});