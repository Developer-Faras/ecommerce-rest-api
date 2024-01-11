const dotenv = require('dotenv');
// const envPath = process.env.NODE_ENV

dotenv.config({
    path: `/env/.env.${process.env.NODE_ENV}`
});


// Server Data
const ServerPort = process.env.SERVER_PORT;

console.log(ServerPort);