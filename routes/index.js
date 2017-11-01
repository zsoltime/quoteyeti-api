'use strict';

const express = require('express');

const router = express.Router();

router.use('/', require('./quotes'));
router.use('/:limit(\\d+)?', require('./quotes'));

module.exports = router;
