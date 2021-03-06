const carProperties = {
  id: { type: 'integer' },
  name: { type: 'string' },
  brand: { type: 'string' },
  price: { type: 'string' },
  age: { type: 'number' },
  created_at: {
    type: 'string',
    format: 'date-time'
  },
  updated_at: {
    type: 'string',
    format: 'date-time'
  }
};
const staffProperties = {
  _id: { type: 'string' },
  fname: { type: 'string' },
  lname: { type: 'string' },
  gender: { type: 'string' },
  age: { type: 'number' },
  dept: { type: 'string' }
};

swagger = {
  getAllstaff: {
    description: 'Get all staff in the database',

    summary: 'Get all staff in the database',
    params: {},
    body: {},
    response: {
      200: {
        description: 'Array containing all staff',
        type: 'array',
        items: { type: 'object', properties: staffProperties }
      }
    }
  },

  addStaff: {
    description: 'Add new Staff to the database',

    summary: 'Adds new Staff to the database',

    params: {},
    body: {
      type: 'object',
      required: ['lname', 'fname', 'gender', 'age', 'dept'],
      properties: staffProperties
    },
    response: {
      200: {
        description: 'New Staff',
        type: 'object',
        properties: staffProperties
      }
    }
  },
  getCars: {
    description: 'Get all cars in the database',
    summary: 'Get all cars in the database',
    params: {},
    //body: {},
    response: {
      200: {
        description: 'Array containing all cars',
        type: 'array',
        items: { type: 'object', properties: carProperties }
      }
    }
  },
  getSingleCar: {
    description: 'Get a car from the database using the name',
    summary: 'Get a car from the database',
    params: { name: { type: 'string' } },
    //body: {},
    
  },
  addSingleCar: {
    description: 'Add a cars from the database',

    summary: 'Add a car from the database',

    params: {},
    body: {
      type: 'object',
      required: ['name', 'brand', 'age'],
      properties: carProperties
    },
    response: {
      200: {
        description: 'A car',
        type: 'object',
        properties: carProperties
      }
    }
  }
};

module.exports = swagger;
