const mongoose = global.mongoose;

const Users = mongoose.model('user', {
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
});

const Bookings = mongoose.model('booking', {
  startDate: { type: Number, required: true },
  endDate: { type: Number, required: true },
  userId: { type: String, required: true },
  residenceId: { type: String, required: true },
  price: { type: Number, required: true }
});

const Residences = mongoose.model('residence', {
  title: { type: String, required: true },
  price: { type: Number, required: true },
  country: { type: String, required: true },
  city: {type: String, required: true},
  address: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Number, required: true },
  endDate: { type: Number, required: true },
  imageURLs: { type: Array, required: true },
  featuresId: { type: String, required: false },
  userId: { type: String, required: true },
  residenceLimit: { type: Number, required: true },
  bookedDays: { type: Array },
  earned: { type: Number },
  views: { type: Number },
  amountOfBookings: { type: Number }
});

const Features = mongoose.model('feature', {
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
