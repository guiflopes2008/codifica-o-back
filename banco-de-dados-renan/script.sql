CREATE DATABASE IF NOT EXISTS user_db;
USE user_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO users (nome, email) VALUES
('Ana Silva', 'ana.silva@example.com'),
('Bruno Costa', 'bruno.costa@example.com'),
('Carlos Mendes', 'carlos.mendes@example.com'),
('Daniela Rocha', 'daniela.rocha@example.com'),
('Eduardo Lima', 'eduardo.lima@example.com'),
('Fernanda Alves', 'fernanda.alves@example.com'),
('Gustavo Souza', 'gustavo.souza@example.com'),
('Helena Martins', 'helena.martins@example.com'),
('Igor Pereira', 'igor.pereira@example.com');

select * from users;