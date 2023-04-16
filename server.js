const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('hii its working fine');
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});