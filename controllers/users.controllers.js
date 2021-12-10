const userCtrl = {};

userCtrl.renderSingupForm = (req, res) =>{
    res.render('users/singup');
};

userCtrl.singup = (req, res) =>{

    var newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword,
    }
    db.ref("usuarios").push(newUser)
    
    console.log(db)
res.render('recibido', {tittle:req.body.name});
};

userCtrl.renderSingInForm = (req, res) =>{
    res.render('users/singin');
};

userCtrl.singin = (req, res) =>{
    console.log(req.body)
res.send('INGRESO');
};

userCtrl.logout = (req, res) =>{
    res.send('logout');
};

module.exports = userCtrl;



