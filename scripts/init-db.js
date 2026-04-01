const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('错误: 缺少Supabase环境变量配置')
  console.error('请设置 NEXT_PUBLIC_SUPABASE_URL 和 SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function initDatabase() {
  console.log('开始初始化数据库...')
  
  try {
    // 使用 RPC 执行 SQL
    const { data, error } = await supabase.rpc('exec_sql', {
      sql: `
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
        
        CREATE TABLE IF NOT EXISTS watchlists (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          user_id UUID NOT NULL,
          stock_id UUID NOT NULL REFERENCES stocks(id) ON DELETE CASCADE,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          UNIQUE(user_id, stock_id)
        );
        
        CREATE INDEX IF NOT EXISTS idx_stocks_symbol ON stocks(symbol);
        CREATE INDEX IF NOT EXISTS idx_watchlists_user_id ON watchlists(user_id);
      `
    })
    
    if (error) {
      console.error('RPC 错误:', error)
      return
    }
    
    console.log('数据库初始化成功:', data)
  } catch (err) {
    console.error('错误:', err)
  }
}

initDatabase()
