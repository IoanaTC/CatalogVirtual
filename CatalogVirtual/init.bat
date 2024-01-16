@echo off

npm init -y

npm install express apollo-server-express graphql mysql2 jsonwebtoken sequelize dotenv mariadb sequelize-cli faker @ngneat/falso casual

npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

node index.js

