export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">StockAI 仪表盘</h1>
          <a href="/" className="text-primary-600 hover:text-primary-700">
            返回首页
          </a>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard title="自选股数量" value="0" />
          <StatCard title="今日涨幅" value="+0.00%" positive />
          <StatCard title="总资产" value="¥0.00" />
          <StatCard title="数据更新" value="刚刚" />
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">我的自选股</h2>
          <div className="text-center py-12 text-gray-500">
            <p>暂无自选股</p>
            <p className="text-sm mt-2">添加股票开始追踪</p>
          </div>
        </div>
      </div>
    </main>
  )
}

function StatCard({ title, value, positive }: { title: string; value: string; positive?: boolean }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <p className="text-sm text-gray-600 mb-1">{title}</p>
      <p className={`text-2xl font-bold ${positive ? 'text-green-600' : 'text-gray-900'}`}>
        {value}
      </p>
    </div>
  )
}
