export const createTable = `CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY,username VARCHAR(100) UNIQUE, fullName VARCHAR(100),password VARCHAR(100), email VARCHAR(100) UNIQUE, bio VARCHAR(200)) `;
export const createUser = `INSERT INTO users (username,email,fullName,password,bio) VALUES (?,?,?,?,?)`;
export const qUsername='SELECT * FROM users WHERE username = ?'
export const qUserData='SELECT id, username, email, fullName, bio  FROM users WHERE id = ?'