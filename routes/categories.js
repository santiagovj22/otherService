const router = require('express').Router();
const categories = require('../controllers/index');

router.get('/categories', async (req,res,next) => {
    try {
        let result = await  categories.getCategeries();
        res.json({message:'success', error:null, data:result}).status(200);
    } catch (error) {
        res.json({message:' Error', error:true}).status(400);
    }
})


module.exports = router;