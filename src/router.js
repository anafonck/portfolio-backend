const express = require("express");
const router = express();
const { saveContact } = require('./controllers/contacts')

router.post('/contact', saveContact);

module.exports = router;