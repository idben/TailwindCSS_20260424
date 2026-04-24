import express from "express";
import path from "node:path";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"))


app.get("/", (req, res)=>{
  res.send("你好")
});

app.get("/test", (req, res)=>{
  res.render("index", {
    title: "樣版測試",
    name: "Ben Chen"
  });
});

app.listen(port, ()=>{
  console.log("伺服器已啟動 http://localhost:3000");
});