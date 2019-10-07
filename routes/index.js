// Import our Controllers
const carController = require('../controllers/carController');
const userController = require('../controllers/userController');
//import swagger routes schema
const schemaDocumentation = require('../documentation/');
const routes = [
  {
    method: 'GET',
    url: '/api/cars',
    handler: carController.getCars,
    schema: schemaDocumentation.getCars
  },
  {
    method: 'GET',
    url: '/api/cars/:id',
    handler: carController.getSingleCar,
    schema: schemaDocumentation.getSingleCar
  },
  {
    method: 'POST',
    url: '/api/cars',
    handler: carController.addCar,
    schema: schemaDocumentation.addSingleCar
  },
  {
    method: 'PUT',
    url: '/api/cars/:id',
    handler: carController.updateCar
  },
  {
    method: 'DELETE',
    url: '/api/cars/:id',
    handler: carController.deleteCar
  },
  {
    method: 'GET',
    url: '/api/users',
    handler: userController.listUsers
  }
];

module.exports = routes;
