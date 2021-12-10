const { Router } = require('express')
const router = Router();

const { renderIndex, renderLogin } = require('../controllers/index.controllers')

router.get('/', (req, res) =>{
     res.render('index');
}); 

router.get('/Login', renderLogin)

module.exports = router;

