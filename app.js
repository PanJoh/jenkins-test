const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.type('text/plain').send('Hello whatever');
});

app.listen(4000);