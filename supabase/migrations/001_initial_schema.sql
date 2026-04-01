-- 创建股票表
CREATE TABLE IF NOT EXISTS stocks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  symbol VARCHAR(20) NOT NULL UNIQUE,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(12, 4) DEFAULT 0,
  change DECIMAL(12, 4) DEFAULT 0,
  change_percent DECIMAL(5, 2) DEFAULT 0,
  volume BIGINT DEFAULT 0,
  market_cap BIGINT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建用户自选股表
CREATE TABLE IF NOT EXISTS watchlists (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  stock_id UUID NOT NULL REFERENCES stocks(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, stock_id)
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_stocks_symbol ON stocks(symbol);
CREATE INDEX IF NOT EXISTS idx_watchlists_user_id ON watchlists(user_id);

-- 插入测试数据
INSERT INTO stocks (symbol, name, price, change, change_percent, volume, market_cap) VALUES
  ('AAPL', 'Apple Inc.', 185.50, 2.30, 1.26, 55000000, 2850000000000),
  ('MSFT', 'Microsoft Corp.', 420.25, 3.15, 0.75, 28000000, 3120000000000),
  ('GOOGL', 'Alphabet Inc.', 165.80, -1.20, -0.72, 22000000, 2050000000000),
  ('AMZN', 'Amazon.com Inc.', 178.90, 4.50, 2.58, 38000000, 1850000000000),
  ('TSLA', 'Tesla Inc.', 175.35, -5.25, -2.91, 105000000, 560000000000)
ON CONFLICT (symbol) DO NOTHING;
