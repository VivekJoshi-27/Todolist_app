const express = require("express");
const app = express();
const conn =require("./db");
const PORT = 2000;
const cors = require("cors")



app.use(cors())
app.use(express.json());

app.get("./todolist");
app.use("/todolist", require("./Routes/Todoapp"));

app.get("./category");
app.use("/category", require("./Routes/Category"));




conn.connection.on("connected", (err) => {
    if(err){
        console.error(err);
    }else{
        console.log("connected  To MongoDB");
    }
})




// create Express Server //
app.listen(PORT, () => {
    console.log("server is started");
})