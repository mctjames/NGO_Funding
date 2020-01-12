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
	res.render('pages/home');
	//res.send('Hello world');
});





// start server
app.listen(5000, function(){
	console.log('server started on port 5000');
})




