# 一言 API

简单的一言API服务，本地运行。使用 Node.js + Express 开发。

## 快速开始

1. **安装依赖**（使用 pnpm）
```bash
pnpm install
```

2. **启动服务**
```bash
pnpm start
```

3. **访问API**
- 浏览器访问: http://localhost:5000
- 获取一言: http://localhost:5000/api

## API使用

### 获取随机一言
```bash
curl http://localhost:5000/api
```
返回纯文本，直接输出一句话。

### 添加新的一言
```bash
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
