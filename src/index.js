const express = require('express');
const bodyParer = require('body-parser');
const {PORT} =  require('./config/serverConfig');
const ApiRoutes = require('./routes/index')
// const db = require('./models/index');
const setupAndStartServer = async() =>{
//  create the express object
  const app = express();
  app.use(bodyParer.json());
  app.use(bodyParer.urlencoded({extended:true}))
  app.use('/api',ApiRoutes);
  app.listen(3000, async ()=>{
    console.log(`server started at ${PORT}`);
});
  
}

setupAndStartServer();