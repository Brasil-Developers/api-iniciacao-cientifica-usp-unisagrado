const express = require('express');
const app = express();

const PORT = 3000;

function onStart(){
    console.log(`Server running on port ${PORT}`);
}

app.listen(PORT, onStart);

module.exports = app;