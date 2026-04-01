export const dynamic = 'force-dynamic'

export async function GET() {
  return Response.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'StockAI API',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  })
}
