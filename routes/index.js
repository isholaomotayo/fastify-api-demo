// Import our Controllers
const carController = require("../controllers/carController");
//import swagger routes schema
const schemaDocumentation = require("../documentation/");
const routes = [
  {
    method: "GET",
    url: "/api/cars",
    handler: carController.getCars,
    schema: schemaDocumentation.getCars
  },
  {
    method: "GET",
    url: "/api/cars/:id",
    handler: carController.getSingleCar,
    schema: schemaDocumentation.getSingleCar
  },
  {
    method: "POST",
    url: "/api/cars",
    handler: carController.addCar,
    schema: schemaDocumentation.addSingleCar
  },
  {
    method: "PUT",
    url: "/api/cars/:id",
    handler: carController.updateCar
  },
  {
    method: "DELETE",
    url: "/api/cars/:id",
    handler: carController.deleteCar
  }
];

module.exports = routes;
