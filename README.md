# StockAI 股票分析平台

StockAI 是一个基于 AI 的股票分析平台，提供实时股票数据、技术分析和智能投资建议。

## 技术栈

- **前端**: Next.js 14 + TypeScript + Tailwind CSS
- **部署**: Vercel
- **数据库**: Supabase (PostgreSQL)
- **认证**: Supabase Auth

## 项目结构

```
stockai/
├── app/                    # Next.js App Router
│   ├── api/               # API 路由
│   ├── dashboard/         # 仪表盘页面
│   └── page.tsx           # 首页
├── components/            # React 组件
├── lib/                   # 工具函数
│   └── supabase.ts       # Supabase 客户端
├── types/                 # TypeScript 类型
├── public/                # 静态资源
├── supabase/              # Supabase 迁移和种子
│   └── migrations/        # 数据库迁移文件
├── .env.example          # 环境变量示例
├── next.config.js        # Next.js 配置
├── package.json          # 依赖管理
├── tsconfig.json         # TypeScript 配置
└── tailwind.config.js    # Tailwind CSS 配置
```

## 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/zhuguangxx/StockAI.git
cd StockAI
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

复制 `.env.example` 为 `.env.local` 并填写你的配置：

```bash
cp .env.example .env.local
```

### 4. 运行开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

## 部署

### 自动部署

项目已配置 Vercel 自动部署，每次推送到 main 分支会自动触发部署。

### 手动部署

```bash
vercel --prod
```

## 数据库

### 连接 Supabase

```bash
npx supabase login
npx supabase link --project-ref your-project-ref
```

### 运行迁移

```bash
npx supabase db push
```

## 环境变量说明

| 变量名 | 说明 | 必填 |
|--------|------|------|
| NEXT_PUBLIC_SUPABASE_URL | Supabase 项目 URL | 是 |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Supabase 匿名密钥 | 是 |
| SUPABASE_SERVICE_ROLE_KEY | Supabase 服务角色密钥 | 是 |

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 许可证

MIT License
