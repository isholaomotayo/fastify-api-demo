//load Elastic APM
//var apm = require("elastic-apm-node").start({ logLevel: "trace" });

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

require('dotenv').config();
// Require external modules
const mongoose = require('mongoose');

// Import Swagger Options
const swagger = require('./config/swagger');

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options);

// Connect to DB
mongoose
  .connect('mongodb://localhost/mycargarage', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB connected…'))
  .catch(err => console.log(err));

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
