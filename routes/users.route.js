const { decodeBase64 } = require('bcryptjs');
const { Router } = require('express');
const router = Router()

const { renderSingupForm,
  singup,
  renderSingInForm,
  singin,
  logout,
} = require("../controllers/users.controllers");


// Routes
router.get('/users/singup', renderSingupForm);
router.get('/singup', singup);

router.post('/users/singup', (req, res)=>{
  console.log(req.body);
   const newContact = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmpassword: req.body.confirmpassword
  }
  res.send('recibido');
});

router.get('/users/singin', renderSingInForm);
router.get('/singin', singin);

router.post('/users/singin', (req, res)=>{
  console.log(req.body);
   const newContact = {
    email: req.body.email,
    password: req.body.password,
  }
  res.send('Ingresado al sistema');
});

router.get('/users/logout', logout);


module.exports = router;

