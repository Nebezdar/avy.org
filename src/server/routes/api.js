const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Получение случайной модели по типу
router.get('/models/random/:type', async (req, res) => {
  try {
    const { type } = req.params;
    const result = await db.query(
      'SELECT * FROM products WHERE product_type = $1 ORDER BY RANDOM() LIMIT 1',
      [type]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Поиск по каталогу
router.get('/catalog', async (req, res) => {
  try {
    const { type, category, series, page = 1, limit = 9 } = req.query;
    const offset = (page - 1) * limit;
    
    let query = 'SELECT * FROM products WHERE 1=1';
    const params = [];
    
    if (type) {
      params.push(type);
      query += ` AND product_type = $${params.length}`;
    }
    if (category) {
      params.push(category);
      query += ` AND category = $${params.length}`;
    }
    if (series) {
      params.push(series);
      query += ` AND series = $${params.length}`;
    }
    
    query += ` LIMIT ${limit} OFFSET ${offset}`;
    
    const result = await db.query(query, params);
    const countResult = await db.query(
      query.replace('*', 'COUNT(*)').split('LIMIT')[0],
      params
    );
    
    res.json({
      items: result.rows,
      total: parseInt(countResult.rows[0].count),
      pages: Math.ceil(countResult.rows[0].count / limit)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Поиск по артикулу или тексту
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    const cleanQuery = q.replace(/[^\w\s]/g, '').toLowerCase();
    
    const result = await db.query(`
      SELECT * FROM products 
      WHERE LOWER(article) LIKE $1 
      OR LOWER(category) LIKE $1 
      OR LOWER(series) LIKE $1 
      LIMIT 10
    `, [`%${cleanQuery}%`]);
    
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Отслеживание скачиваний
router.post('/downloads/track', async (req, res) => {
  try {
    const { productId, format } = req.body;
    const userId = req.user?.id;
    const ipAddress = req.ip;
    
    await db.query(`
      INSERT INTO downloads (user_id, product_id, ip_address, file_format)
      VALUES ($1, $2, $3, $4)
    `, [userId, productId, ipAddress, format]);
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Проверка лимита скачиваний
router.get('/downloads/check-limit', async (req, res) => {
  try {
    const ipAddress = req.ip;
    const today = new Date().toISOString().split('T')[0];
    
    const result = await db.query(`
      SELECT COUNT(*) as count 
      FROM downloads 
      WHERE ip_address = $1 
      AND DATE(download_date) = $2
    `, [ipAddress, today]);
    
    const count = parseInt(result.rows[0].count);
    res.json({ 
      remainingDownloads: Math.max(0, 3 - count),
      limitReached: count >= 3 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 