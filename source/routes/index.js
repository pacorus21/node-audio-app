const express = require('express');
const router = express.Router();

// controllers
const home = require('../controllers/home');
const track = require('../controllers/track');

// Home Page
router.get('/', (req, res) => res.redirect('/home'));
router.get('/home', (req, res) => home.index(req, res));

// Track Page
router.get('/track', (req, res) => track.index(req, res));

module.exports = router;