const express =require('express')
const router = express.Router();
const { generateText } = require('../controllers/openaiController');

router.post('/generateData', generateText);
    


module.exports=router;