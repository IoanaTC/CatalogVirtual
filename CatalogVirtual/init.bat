@ECHO off

cd D:\CatalogVirtual\CatalogVirtual

call npm init -y
call npm install express apollo-server-express graphql graphql-http mysql2 jsonwebtoken sequelize dotenv mariadb sequelize-cli faker @ngneat/falso casual

call npx sequelize-cli db:migrate
call npx sequelize-cli db:seed:all

node index.js

