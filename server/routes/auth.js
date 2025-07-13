const express = require('express');
const { register, login, getMe, updateMembership, updateUser } = require('../controllers/auth');
const upload = require('../middleware/upload');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.put('/membership', protect, updateMembership);
router.put('/update', protect, updateUser);

module.exports = router;
