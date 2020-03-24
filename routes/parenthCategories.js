const router = require('express').Router();
const categoiesParenth = require('../controllers/index');


router
.route('/parenth')
.get(async (req,res,next) => {
    try{
        let data = await categoiesParenth.parenthCategories();
        res.json({message: 'success', error: null, datos: data}).status(200);
    }
    catch(err){
        res.json({message:'error', error:true}).status(400)
    }
}) 

module.exports = router;