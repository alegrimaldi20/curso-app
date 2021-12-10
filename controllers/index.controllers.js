const indexctrl = {};

indexctrl.renderIndex =  (req, res) => {
    res.render('index')
  };

indexctrl.renderLogin = (req, res) => {
    res.render('Login')
  };

module.exports = indexctrl;