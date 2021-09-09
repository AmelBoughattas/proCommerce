
const express = require("express");
const connectDB =require('./helpers/db');
const productRoutes = require("./routes/productRoutes");
const cors = require('cors');
const config = require('config'); 

require('dotenv').config();

connectDB();
const app = express();

//middleware
app.use(cors())
app.use(express.json({limit:'50mb'}));
app.use("/api/user",require('./routes/userRoutes')) 
/* app.use('/api/post',require('./routes/postRoutes'))  */  
app.use('/api/product',require('./routes/productRoutes'))  

//contact
app.use('/api/contact', require('./routes/contactRoute'))

//pagination
  app.use("/api/products", require('./routes/productRoutes'))   

app.use("/api/command",require('./routes/commandRouter'))



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
