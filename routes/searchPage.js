var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Student = require('../models/student');

var searchPagedb_controller =  require('../controllers/searchPagedbController');

/* GET request for list of all Students. */
router.get('/', searchPagedb_controller.job_list);

module.exports = router;