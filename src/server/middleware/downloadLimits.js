const db = require('../config/database');

const checkDownloadLimit = async (req, res, next) => {
  try {
    // Пропускаем проверку для авторизованных пользователей
    if (req.user) {
      return next();
    }

    const ipAddress = req.ip;
    const today = new Date().toISOString().split('T')[0];
    
    const result = await db.query(`
      SELECT COUNT(*) as count 
      FROM downloads 
      WHERE ip_address = $1 
      AND DATE(download_date) = $2
    `, [ipAddress, today]);
    
    const count = parseInt(result.rows[0].count);
    
    if (count >= 3) {
      return res.status(429).json({
        error: 'Download limit reached',
        message: 'Please sign in to download more models'
      });
    }
    
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { checkDownloadLimit }; 