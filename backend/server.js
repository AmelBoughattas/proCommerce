
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
 app.use("/api/products", productRoutes);  

app.use("/api/command",require('./routes/commandRouter'))





//for contact mail
/* app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/',()=>{
    restzeBy.send('Welcome to my contact')
})

app.post('/api/forma', (req,res)=>{
let data =req.body
let smtpTransport = nodemailer.createTransport({
    service:'Gmail',
    port:465,
    auth:{
        user:'am.boughattas@gmail.com',
        pass:'#am-misi#'
    }
})

let mailOptions={
    from:data.email,
    to:'am.boughattas@gmail.com',
    subject:`Message from ${data.name}`,
    html:`
    <h3>Informations</h3>
    <ul>
      <li>Name: ${data.name}</li>
      <li>LastName: ${data.lastname}</li>
      <li>Email: ${data.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${data.message}</p>
    `
};
smtpTransport.sendMail(mailOptions, (error,response)=>{
    if(error)
    {
        res.send(error)
    }
    else{
        res.send('Success')
    }
})
smptTransport.close();
}) */

/* app.get('api/config/paypal', (req, res)=>{
    res.sent(process.env.PAYPAL_CLIENT_ID || 'sb');
}) */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
