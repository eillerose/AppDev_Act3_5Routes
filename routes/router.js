const express = require('express');

const router = express.Router();
const eraController = require("../controller/eraController");

router.get('/', eraController.index);
router.get('/music/music', eraController.music);
router.get('/music/artist', eraController.artist);
router.get('/music/favorites', eraController.favorites);
router.get('/music/library', eraController.library);

module.exports = router;