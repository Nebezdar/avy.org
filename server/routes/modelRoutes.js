const express = require('express');
const router = express.Router();
const modelController = require('../controllers/modelController');

// Тестовый маршрут
router.get('/test', (req, res) => {
  res.json({ message: 'API is working' });
});

// API маршруты
router.get('/models/types/:productType', modelController.getItemTypes);
router.get('/models/series/:productType/:itemType', modelController.getSeries);
router.get('/models/:productType/:itemType/:series', modelController.getModels);

module.exports = router; 