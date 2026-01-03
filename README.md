# 一言 API

简单的一言API服务，部署在 Vercel 上的无服务器函数。

## 🚀 部署到 Vercel

### 方法一：GitHub + Vercel 自动部署（推荐）

1. **将代码推送到 GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

2. **在 Vercel 中导入项目**
- 访问 [vercel.com](https://vercel.com)
- 点击 "New Project"
- 连接 GitHub 并选择你的仓库
- 点击 "Deploy"

### 方法二：使用 Vercel CLI

1. **安装 Vercel CLI**
```bash
npm i -g vercel
```

2. **登录并部署**
```bash
vercel login
vercel
```

## 本地开发

1. **安装 Vercel CLI**
```bash
npm i -g vercel
```

2. **本地开发**
```bash
vercel dev
```

3. **访问**
- 首页: http://localhost:3000
- API: http://localhost:3000/api/hitokoto

## API 使用

### 获取随机一言
```bash
curl https://你的域名.vercel.app/api/hitokoto
```
返回纯文本格式的随机一言。

### 添加新的一言
```bash
curl -X POST https://你的域名.vercel.app/api/hitokoto \
  -H "Content-Type: application/json" \
  -d '{"text": "你要添加的一言内容"}'
```

## 项目结构

```
├── api/
│   ├── index.js      # 首页路由（无服务器函数）
│   └── hitokoto.js   # 一言API路由（无服务器函数）
├── hitokoto.txt      # 一言数据文件
├── vercel.json       # Vercel配置文件
├── package.json      # 项目配置
└── README.md         # 项目说明
```

## 技术栈

- **平台**: Vercel 无服务器函数
- **运行时**: Node.js
- **数据存储**: 文本文件
- **API风格**: RESTful

## 特性

- ✅ 无服务器部署，自动扩容
- ✅ 全球 CDN 加速
- ✅ CORS 支持，跨域友好
- ✅ 纯文本API响应
- ✅ 支持添加新的一言
- ✅ 响应式网页界面

## 注意事项

- Vercel 无服务器函数有执行时间限制
- 文件写入操作在无服务器环境中可能不持久化
- 建议生产环境使用数据库存储数据
curl -X POST http://localhost:5000/api/add -d "text=你的句子"
```

或使用JSON格式：
```bash
curl -X POST http://localhost:5000/api/add \
  -H "Content-Type: application/json" \
  -d '{"text":"你的句子"}'
```

## 文件说明

- `index.js` - API服务主程序
- `hitokoto.txt` - 词条存储文件（每行一条）
- `package.json` - 项目配置

## 自定义词条

直接编辑 `hitokoto.txt` 文件，每行一条句子即可。
