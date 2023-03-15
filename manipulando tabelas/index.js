// mysql instalado
CREATE TABLE users(
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL,
)

// padrao
INSERT INTO users(nome, email, senha) 
VALUES('nome', 'email', 'senha');

