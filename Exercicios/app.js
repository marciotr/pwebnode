var express = require('express')
var app = express()

app.set('view engine','ejs');

app.get('/', function(req,res){
    res.sand("<html><body>Home da Fatec Sorocaba!</body></html>")
});
app.get('/historia', function(req,res){
    res.sand("<html><body>Historia da Fatec Sorocaba</body></html>")
});
app.get('/cursos', function(req,res){
    res.sand("<html><body>Cursos da Fatec Sorocaba</body></html>")
});
app.get('/professores', function(req,res){
    res.sand("<html><body>Professores da Fatec Sorocaba</body></html>")
});

app.get('/informacao/cursos', function(req,res){
    res.render("informacao/cursos")
});

app.get('/informacao/professores', function(req,res){
    res.render("informacao/professores")
});

app.get(3000, function(){
    res.sand("Servidor express foi carregado!")
});