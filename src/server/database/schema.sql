-- Таблица продуктов
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    article VARCHAR(50) UNIQUE NOT NULL,
    product_type VARCHAR(50) NOT NULL,
    category VARCHAR(100) NOT NULL,
    series VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица для отслеживания скачиваний
CREATE TABLE downloads (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    product_id INTEGER REFERENCES products(id),
    ip_address VARCHAR(45),
    download_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    file_format VARCHAR(10) NOT NULL
);

-- Индексы для оптимизации поиска
CREATE INDEX idx_products_article ON products(article);
CREATE INDEX idx_products_type ON products(product_type);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_series ON products(series);
CREATE INDEX idx_downloads_user ON downloads(user_id, download_date);
CREATE INDEX idx_downloads_ip ON downloads(ip_address, download_date); 