const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.type('text/plain').send('Hello Universe');
});

app.listen(4000);