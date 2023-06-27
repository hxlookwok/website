const express = require("express");
const app = express();
app.use(express.static(".public"));
app.get("/", function(req,res){
    res.sendFile(__dirname + "/main.html");
});
app.post("/", function(req,res) {
    res.sendFile(__dirname + "/main2.html");
});
app.listen(process.enc.PORT||3000, function() {
    console.log(`Server is running on port ${process.env.PORT}.`);
});
