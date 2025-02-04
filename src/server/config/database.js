const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  // Добавляем индексы для быстрого поиска
  afterConnect: async (client) => {
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_products_article ON products(article);
      CREATE INDEX IF NOT EXISTS idx_products_type ON products(product_type);
      CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
      CREATE INDEX IF NOT EXISTS idx_products_series ON products(series);
    `);
  }
});

module.exports = pool; 