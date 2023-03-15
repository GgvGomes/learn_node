// Conectando a um banco de dados - sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'pass', {
    host: "localhost", // onde está o banco de dados
    dialect: 'mysql' // qual banco de dados
}) // database, user, senha

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro)
});

// Modulos

const Postagem = sequelize.define('postagens', { // nome da tabela
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
}); // Já cria o Id como primary key

// Post de Insert
Postagem.creae({
    titulo: "Um titulo",
    conteudo: "Um conteudo"
});

// Depois que criada não rodas mais
Postagem.sync({force: true}); // cria a tabela