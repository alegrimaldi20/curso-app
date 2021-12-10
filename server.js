const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
// Initialization
const app = express();
const port = 3000


//settings
app.set('port',process.env.PORT||3000)
app.set('views', path.join(__dirname, 'views')),
app.engine('.hbs', exphbs.engine({
  defaultlayout:'main',
  layotsDir: path.join(app.get('views'), 'layouts'),  
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}))
app.set('view engine', '.hbs');


//static files
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json({limit: "50mb"}))

//Rutas
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/users.route'));

app.get('/', (req, res) =>{
  res.render('main')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  