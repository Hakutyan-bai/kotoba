const fs = require('fs');
const path = require('path');

// 获取词条文件路径
const getFilePath = () => path.join(process.cwd(), 'hitokoto.txt');

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

module.exports = function handler(req, res) {
  // 设置 CORS 头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    const list = getHitokotoList();
    
    if (list.length === 0) {
      return res.status(200).send('暂无一言');
    }
    
    const randomIndex = Math.floor(Math.random() * list.length);
    res.status(200).send(list[randomIndex]);
  } else if (req.method === 'POST') {
    const { text } = req.body;
    
    if (!text || text.trim() === '') {
      return res.status(400).json({ error: '内容不能为空' });
    }
    
    try {
      fs.appendFileSync(getFilePath(), '\n' + text.trim());
      res.status(200).json({ message: '添加成功', text: text.trim() });
    } catch (error) {
      console.error('写入文件失败:', error);
      res.status(500).json({ error: '添加失败' });
    }
  } else {
    res.status(405).json({ error: '不支持的请求方法' });
  }
};