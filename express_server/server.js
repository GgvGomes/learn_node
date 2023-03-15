const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

// HandleBars
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Exibindo arquivo handlebars
app.get('/handlebars', (req, res) => {
    res.render('formulario', {id: 123});
});

app.get('/', (req, res) => {
    Post.all({
        order: [['id', 'DESC']]
    }).then(function(posts){
        res.render('home', {posts: posts});
    }); // Retorna todos os posts
});

app.get('/deletar:id', (req, res) => {
    Post.destroy({
        where: {'id': req.params.id}
    }).then(() => {
        res.send("Postagem deletada com sucesso");
    }).catch((erro) => {
        res.send("Esta postagem não existe");
    });
});

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.send("Post criado com sucesso");
        res.redirect('/')
    }).catch((erro) => {
        res.send("Houve um erro: " + erro);
    });
    // res.send('Formulario cadastrado; Nome: ' +  req.body.nome);
});

// Path: express_server\server.js
// Pasta da req e function(dados da requisicao, resposta)
app.get("/", (req, res) => {
    res.send("Seja bem vindo")
    
});

// retornando uma pasta html
app.get("/pagehmtl", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Página com parametro
app.get("/param/:param/:param2", (req, res) => {
    res.send(req.params.param + " " + req.params.param2)
    // return res.sendFile(__dirname + '/index.html')
});

// Pede apenas a porta -> ela deve ser a última linha do cod
app.listen(3000, ()=> { 
    // function de callback (sempre q acontece algo ela é chamada)
    console.log("Servidor rodando");
})

// ==========================================
