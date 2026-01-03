const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// 解析JSON和表单数据
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 获取词条文件路径
const getFilePath = () => path.join(__dirname, 'hitokoto.txt');

// 读取所有一言
const getHitokotoList = () => {
  try {
    const content = fs.readFileSync(getFilePath(), 'utf-8');
    return content.split('\n').filter(line => line.trim());
  } catch (error) {
    console.error('读取文件失败:', error);
    return [];
  }
};

// 添加新的一言
const addHitokoto = (text) => {
  try {
    fs.appendFileSync(getFilePath(), `\n${text}`, 'utf-8');
    return true;
  } catch (error) {
    console.error('添加失败:', error);
    return false;
  }
};

// 首页
app.get('/', (req, res) => {
  res.send(`
    <h1>一言 API</h1>
    <p>GET /api - 获取随机一言（纯文本）</p>
    <p>POST /api/add - 添加新的一言（参数：text）</p>
    <p><a href="/api">试试看</a></p>
  `);
});

// 获取随机一言 - 只返回纯文本
app.get('/api', (req, res) => {
  const list = getHitokotoList();
  
  if (list.length === 0) {
    return res.send('暂无一言');
  }
  
  const randomIndex = Math.floor(Math.random() * list.length);
  res.send(list[randomIndex]);
});

// 添加新的一言
app.post('/api/add', (req, res) => {
  const { text } = req.body;
  
  if (!text || !text.trim()) {
    return res.status(400).send('错误: 请提供 text 参数');
  }
  
  if (addHitokoto(text.trim())) {
    res.send('添加成功');
  } else {
    res.status(500).send('添加失败');
  }
});

// 启动服务
app.listen(PORT, () => {
  console.log('一言 API 服务启动中...');
  console.log(`访问: http://localhost:${PORT}`);
  console.log(`获取一言: http://localhost:${PORT}/api`);
});
