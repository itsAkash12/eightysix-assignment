require('dotenv').config()
const express = require('express');
const cors = require('cors');
const connection = require("./config/dbConfig")
const PORT = process.env.PORT || 8080
const app = express();
const userRoute = require("./routes/user.route");
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use("/users",userRoute);

app.get('/', (req, res)=> {
  res.send('This is from Backend');
})

app.listen(PORT, ()=> {
  connection()
  console.log(`server started on http://localhost:${PORT}`)
});