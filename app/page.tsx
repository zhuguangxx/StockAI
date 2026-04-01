export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            StockAI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            智能股票分析平台 - 基于 AI 的实时数据分析与投资建议
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/dashboard"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              进入仪表盘
            </a>
            <a
              href="https://github.com/zhuguangxx/StockAI"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="实时数据"
            description="获取股票实时行情数据，掌握市场动态"
            icon="📊"
          />
          <FeatureCard
            title="AI 分析"
            description="智能算法分析股票趋势，提供投资建议"
            icon="🤖"
          />
          <FeatureCard
            title="自选股管理"
            description="管理你的自选股列表，实时追踪关注股票"
            icon="⭐"
          />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            系统状态: 运行正常 | 部署: Vercel | 数据库: Supabase
          </div>
        </div>
      </div>
    </main>
  )
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
