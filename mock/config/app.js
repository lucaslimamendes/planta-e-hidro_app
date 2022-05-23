const jsonServer = require('json-server');
const routes = require('./routes');

module.exports = () => {
    const server = jsonServer.create();

    server.use(jsonServer.bodyParser);

    routes(server);

    return server;
}
