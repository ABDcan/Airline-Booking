const express = require('express');
const bodyParer = require('body-parser');

const {PORT} =  require('./config/serverConfig')
const setupAndStartServer = async() =>{
//  create the express object
  const app = express();
  app.use(bodyParer.json());
  app.use(bodyParer.urlencoded({extended:true}))
  app.listen(3000,()=>{
    console.log(`server started at ${PORT}`)
    // console.log(process);
  })
}

setupAndStartServer();