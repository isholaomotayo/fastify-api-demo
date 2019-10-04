// External Dependancies
const boom = require("boom");

// Get Data Models
const Staff = require("../models/Staff");

// Get all staff
exports.getAllstaff = async (req, reply) => {
  try {
    const allstaff = await Staff.find();
    return allstaff;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single staff by ID
exports.getSingleStaff = async (req, reply) => {
  try {
    const id = req.params.id;
    const staff = await Staff.findById(id);
    return staff;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new Staff
exports.addStaff = async (req, reply) => {
  try {
    const staff = new Staff(req.body);
    return staff.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing staff record
exports.updateStaff = async (req, reply) => {
  try {
    const id = req.params.id;
    const staff = req.body;
    const { ...updateData } = car;
    const update = await Staff.findByIdAndUpdate(id, updateData, { new: true });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a Staff
exports.deleteCar = async (req, reply) => {
  try {
    const id = req.params.id;
    const staff = await Staff.findByIdAndRemove(id);
    return staff;
  } catch (err) {
    throw boom.boomify(err);
  }
};
