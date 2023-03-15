// Conectando a um banco de dados - sequelize
const Sequelize = require('sequelize');
// Deve conectar a tabela certa
const sequelize = new Sequelize('teste', 'root', 'pass', {
    host: "localhost", // onde está o banco de dados
    dialect: 'mysql' // qual banco de dados
}) // database, user, senha

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro)
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}