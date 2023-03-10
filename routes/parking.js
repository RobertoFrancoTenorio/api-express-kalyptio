const express = require('express');
const router = express.Router();
const parkingController = require('../controllers/parkingController');
router.post('/', parkingController.createParking)

router.get('/get_parkings', parkingController.getParkings)

router.get('/:id', parkingController.getParking)

router.delete('/:id', parkingController.deleteParking)


module.exports = router;