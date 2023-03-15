const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/aprendendo', // endereço do banco de dados/ qual banco de dados
    {useNewUrlParser: true, useUnifiedTopology: true, useMongoClient: true} // Evita alguns erros de conexão 
).then(() => {
    console.log("MongoDb conectado...");
}).catch((erro) => {
    console.log("Falha ao se conectar: " + erro);
});

// Model - Usuários
const UsuerSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: number,
        require: false
    }
});
// Collection
mongoose.model('usuarios', UsuerSchema);

const Usuario = mongoose.model('usuarios');
new Usuario({
    nome: "João",
    sobrenome: "Silva",
    email: "teste@gmail.com",
    idade: 20,
}).save().then(() => {
    console.log("Usuário criado com sucesso");
}).catch((erro) => {
    console.log("Erro ao criar usuário: " + erro);
});

