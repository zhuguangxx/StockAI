export const metadata = {
  title: 'StockAI - 智能股票分析平台',
  description: '基于 AI 的股票分析平台，提供实时股票数据、技术分析和智能投资建议',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  )
}
