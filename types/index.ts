export interface Stock {
  id: string
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
  volume: number
  marketCap: number
  created_at: string
  updated_at: string
}

export interface User {
  id: string
  email: string
  created_at: string
}

export interface Watchlist {
  id: string
  user_id: string
  stock_id: string
  created_at: string
}
