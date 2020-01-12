const express = require('express');
const app = express();
const path = require('path');

// const bodyParser    =   require('body-parser')
// const session       =   require('express-session')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(__dirname+ '/public'));







// Home page
app.get('/', function(req, res){
	res.render('pages/index');
});

app.get('/about', function(req, res ){
	res.render('pages/about')
})

// app.get('/causes', function(req, res ){
// 	res.render('pages/causes')
// })

app.get('/contact', function(req, res ){
	res.render('pages/contact')
})

// app.get('/elements', function(req, res ){
// 	res.render('pages/elements')
// })

app.get('/index', function(req, res ){
	res.render('pages/index')
})

// app.get('/news', function(req, res ){
// 	res.render('pages/news')
// })

// app.get('/portfolio', function(req, res ){
// 	res.render('pages/portfolio')
// })

// app.get('/single-cause', function(req, res ){
// 	res.render('pages/single-cause')
// })





// start server
app.listen(process.env.PORT || 5000, function(){
	console.log('server started on port 5000');
})




