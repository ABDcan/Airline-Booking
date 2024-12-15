const express = require('express');
const {PORT} =  require('./config/serverConfig')
const setupAndStartServer = async() =>{
//  create the express object
  const app = express();
  app.listen(3000,()=>{
    console.log(`server started at ${PORT}`)
    // console.log(process);
  })
}

setupAndStartServer();