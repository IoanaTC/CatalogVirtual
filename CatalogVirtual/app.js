const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');

const schema = require('./models');
const schema1 = require('./graphql');
const app = express();
app.use(express.json());

app.all('/', createHandler({
    schema,
    context: (req) => {
        return 0;
    },
}));

app.all('/graphql', createHandler({
    schema: schema1,
    context: (req) => {
      return 0;
    },
 }))
async function start(port) {
    return new Promise((resolve) => app.listen({ port }, resolve));
}

module.exports = {
    start,
};

