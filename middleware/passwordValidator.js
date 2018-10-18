var passwordValidator = require('password-validator');
var jwt = require('jsonwebtoken');
var sequelize = require('../db');
var User = sequelize.import('../models/1-user');

export
// Create a schema
var schema = new passwordValidator();
 
// Add properties to it
schema
.is().min(5)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
 
// Validate against a password string
console.log(schema.validate('validPASS123'));
// => true
console.log(schema.validate('invalidPASS'));
// => false
 
// Get a full list of rules which failed
console.log(schema.validate('joke', { list: true }));
// => [ 'min', 'uppercase', 'digits' ]