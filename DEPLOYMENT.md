# StockAI 网站部署文档

## 部署信息

| 项目 | 详情 |
|------|------|
| **部署时间** | 2026-04-01 |
| **部署状态** | ✅ 成功 |
| **部署平台** | Vercel |

## 线上地址

- **主域名**: https://deployment-k6unn8n21-zhuguangxxs-projects.vercel.app
- **别名**: https://deployment-smoky-theta.vercel.app

## 技术栈

- **框架**: Next.js 14.2.0
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **数据库**: Supabase
- **部署**: Vercel

## 页面结构

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `/` | Hero + 产品介绍 + 功能展示 |
| 仪表盘 | `/dashboard` | 股票数据仪表盘 |
| API健康检查 | `/api/health` | 服务状态检查 |

## 环境变量

| 变量名 | 说明 |
|--------|------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase项目URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase匿名密钥 |

## GitHub仓库

- **仓库地址**: https://github.com/zhuguangxx/StockAI
- **分支**: main
- **自动部署**: 已启用（push到main分支自动触发）

## 部署步骤

1. ✅ 本地构建测试通过
2. ✅ 代码提交到GitHub
3. ✅ Vercel自动部署成功
4. ✅ 线上验证通过

## 后续维护

- 代码更新推送到main分支后，Vercel会自动重新部署
- 如需手动部署，运行: `vercel --prod`

## 注意事项

- 敏感信息（Supabase密钥等）已移至环境变量
- 本地开发时需创建 `.env.local` 文件
- 生产环境变量在Vercel Dashboard中配置
