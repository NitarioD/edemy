const express = require('express');

const router = express.Router();

//controller functions
import {register} from  "../controllers/auth.js";

router.post('/register', register);

  module.exports = router;