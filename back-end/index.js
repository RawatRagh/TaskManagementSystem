const express = require("express");
const cors = require("cors")
const employeeRoutes = require('./routes/employeeRoutes');
const port = 3000;

const app = express();


app.use(cors());

app.use('/api',employeeRoutes)

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});