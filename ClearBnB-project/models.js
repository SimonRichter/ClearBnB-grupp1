const { mongo } = require("mongoose");

const mongoose = global.mongoose;

const Users = mongoose.model('Users', {
  email: { type: String, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
});

const Bookings = mongoose.model('Bookings', {
  startDate: { type: Number, required: true },
  endDate: { type: Number, required: true },
  userId: { type: String, unique: true, required: true },
  residenceId: { type: String, required: true },
  price: { type: Number, required: true },
});

const Residences = mongoose.model('Residences', {
  title: { type: String, required: true },
  adress: { type: String, unique: true, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Number, required: true },
  endDate: { type: Number, required: true },
  imageURLs: { type: Array, required: true },
  featuresId: { type: String, unique: true, required: true },
  userId: { type: String, unique: true, required: true },
  residenceLimit: { type: Number, required: true },
});

const Features = mongoose.model('Features', {
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

module.exports = {
  users: Users,
  bookings: Bookings,
  residences: Residences,
  features: Features
}
