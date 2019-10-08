//load Elastic APM
//var apm = require('elastic-apm-node').start({ logLevel: 'trace' });

require('dotenv').config();
//import adn initialize database connections

const { knex, mongoose } = require('./config/connection');
//const mongoose = require('./config/connection');

//Require fatify framework and instantiate it
const fastify = require('fastify')({
  trustProxy: true,
  logger: {
    level: process.env.LOG_LEVEL || 'error',
    prettifier: require('pino-pretty'),
    prettyPrint: {
      errorProps: 'hint, detail',
      levelFirst: true,
      crlf: true
    }
  }
});

// Import Swagger Options
const swagger = require('./config/swagger');

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options);
//Import JWT plugin for fastify
fastify.register(require('fastify-jwt'), {
  secret: process.env.JWTSECRET
});

fastify.post('/signup', (req, reply) => {
  // some code
  const payload = { name: 'Omotayo Ishola', role: 'admin' };
  const token = fastify.jwt.sign({ payload });
  reply.send({ token });
});

const routes = require('./routes/');
routes.forEach((route, index) => {
  fastify.route(route);
});

// Run server function
const start = async () => {
  try {
    await fastify.listen(process.env.PORT);
    fastify.swagger();
  } catch (error) {
    fastify.log.error(error);
    apm.captureError(error);
    process.exit(1);
  }
};

start();
