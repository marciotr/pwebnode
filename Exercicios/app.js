var app = require('./app/config/server')

app.set('view engine','ejs');

app.get('/', function(req,res){
    res.send("<html><body>Home da Fatec Sorocaba!</body></html>")
});
app.get('/historia', function(req,res){
    res.send("<html><body>Historia da Fatec Sorocaba</body></html>")
});
app.get('/cursos', function(req,res){
    res.send("<html><body>Cursos da Fatec Sorocaba</body></html>")
});
app.get('/professores', function(req,res){
    res.send("<html><body>Professores da Fatec Sorocaba</body></html>")
});

app.get('/informacao/cursos', function(req,res){
    res.render("informacao/cursos")
});

app.get('/informacao/professores', function(req,res){
    res.render("informacao/professores")
});

app.listen(3000, function(){
    console.log("servidor iniciado")
});