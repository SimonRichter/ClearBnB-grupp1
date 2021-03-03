const { mongo } = require("mongoose");

const mongoose = global.mongoose;

const Users = mongoose.model('Users', {
  email: String,
  firstName: String,
  lastName: String,
  password: String
});

const Bookings = global.mongoose('Bookings', {
  startDate: Number,
  endDate: Number,
  userId: String,
  residenceId: String,
  price: Number
});

const Residences = global.mongoose('Residences', {
  title: String,
  adress: { type: String, unique: true, required: true },
  type: String,
  description: String,
  startDate: Number,
  endDate: Number,
  imageURLs: Array,
  featuresId: String,
  userId: String,
  residenceLimit: Number,
});

const Features = global.mongoose('Features', {
  firstAidKit: Boolean,
  shower: Boolean,
  parking: Boolean,
  stove: Boolean,
  oven: Boolean,
  microwave: Boolean,
  tv: Boolean,
  coffeeMaker: Boolean,
  wifi: Boolean,
  balcony: Boolean,
  iron: Boolean,
  pool: Boolean,
  fridge: Boolean,
  dishwasher: Boolean
});
