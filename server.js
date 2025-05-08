// Node.js сервер — заглушка
const express = require('express');
const app = express();
app.use(express.static('.'));
app.listen(3000, () => console.log('Server started on http://localhost:3000'));