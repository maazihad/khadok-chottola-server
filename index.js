const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
   res.send("Chef Nahid Osman Bangladesh is Running....",);
});

app.use(cors());



app.listen(port, () => {
   console.log(`The Chef Nahid Osman Bd running on port : ${port}`);
});