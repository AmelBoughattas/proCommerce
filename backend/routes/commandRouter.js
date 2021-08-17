const router = require('express').Router();
const commandeControllers = require("../controller/commandeControllers");
const {tokenMiddleware} =require('../middleware/tokenMiddleware')

router.post('/addcommand',tokenMiddleware,  commandeControllers.addCommand)
router.get('/getcommand',tokenMiddleware,commandeControllers.getCommande);
module.exports = router