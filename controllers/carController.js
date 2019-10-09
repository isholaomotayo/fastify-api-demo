// External Dependancies
const boom = require('boom');

// Get Data Models
const Car = require('../models/Car');
//Get knex

// Get all cars
exports.getCars = async (req, reply) => {
  try {
    const cars = await Car.fetchAll();
    return cars.serialize();
    
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single car by Name
exports.getSingleCar = async (req, reply) => {
  try {
    const name = req.params.name;
    //const car = await Car.fetch('id', '=', id)
    //const car = await Car.where({ name: req.params.name }).fetch();

    const car = await new Car({ 'name': name }).fetch();
    
    return car;
    //return [{ name: 'Genny' }];
  } catch (err) {
    console.log('nah i got here');
    throw boom.boomify(err);
  }
};

// Add a new car
/* exports.addCar = async (req, reply) => {
  try {
    const car = new Car(req.body);
    return car.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing car
exports.updateCar = async (req, reply) => {
  try {
    const id = req.params.id;
    const car = req.body;
    const { ...updateData } = car;
    const update = await Car.findByIdAndUpdate(id, updateData, { new: true });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a car
exports.deleteCar = async (req, reply) => {
  try {
    const id = req.params.id;
    const car = await Car.findByIdAndRemove(id);
    return car;
  } catch (err) {
    throw boom.boomify(err);
  }
}; */
