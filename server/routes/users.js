const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  promoteUser,
} = require('../controllers/users');

const User = require('../models/User');
const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All routes below this middleware will be protected and require an admin role
router.use(protect);
router.use(authorize('admin'));

router
  .route('/')
  .get(advancedResults(User), getUsers) // GET /api/users - List all users
  .post(createUser); // POST /api/users - Create a user

router
  .route('/:id')
  .get(getUser) // GET /api/users/:id - Get a single user
  .put(updateUser) // PUT /api/users/:id - Update a user (can be used for approval)
  .delete(deleteUser); // DELETE /api/users/:id - Delete a user

router.put('/:id/promote', promoteUser); // This route is already correct

module.exports = router;
