const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.use('/login', authRoutes);
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
});