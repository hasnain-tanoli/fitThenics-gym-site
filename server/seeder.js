const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './.env' });

// Load models
const User = require('./models/User');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Create admin user
const createAdmin = async () => {
  try {
    await User.create({
      name: 'Admin User',
      email: 'admin@test.com',
      password: 'password123',
      role: 'admin',
      phone: '1234567890',
      age: 30,
      gender: 'male',
      membershipStatus: 'active',
    });
    console.log('Admin user created...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-c') {
  createAdmin();
}
