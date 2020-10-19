const express = require('express');
const router = express.Router();

const Driver = require('../models/driver');

const driverCtrl = require('../controllers/driver');

router.get('/', driverCtrl.getAllDriver);
router.post('/',driverCtrl.createDriver);
router.get('/:id', driverCtrl.getOneDriver);
router.put('/:id',driverCtrl.modifyDriver);
router.delete('/:id', driverCtrl.deleteDriver);

module.exports = router;