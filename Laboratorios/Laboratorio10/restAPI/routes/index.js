var express = require('express');
var router = express.Router();
var registro = require("../models/registro")
/* GET home page. */
router.get('/', function(request, response, next) {
  console.log(request);
  registro.find((error, registers)=>{
if(error) return response.status(500).json({message:"Error interno del sistema"});
if(registers){
  response.status(200).json({registers});
}
else{
  response.status(404).json({message:"No hay registro"});
}
  })
});

module.exports = router;
