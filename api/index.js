export default function handler(req, res) {
  // 设置 CORS 头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'GET') {
    return res.status(405).json({ error: '不支持的请求方法' });
  }

  // 返回 HTML 页面
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>一言 API</title>
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          max-width: 800px; 
          margin: 50px auto; 
          padding: 20px;
          background-color: #f5f5f5;
        }
        .container {
          background: white;
          border-radius: 10px;
          padding: 40px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 { 
          color: #333; 
          text-align: center;
          margin-bottom: 30px;
        }
        .api-item {
          background: #f8f9fa;
          padding: 20px;
          margin: 15px 0;
          border-radius: 8px;
          border-left: 4px solid #007bff;
        }
        .api-item h3 {
          margin: 0 0 10px 0;
          color: #007bff;
        }
        .api-item p {
          margin: 5px 0;
          color: #666;
        }
        a { 
          color: #007bff; 
          text-decoration: none; 
          font-weight: 500;
        }
        a:hover { 
          text-decoration: underline; 
        }
        .demo-button {
          display: inline-block;
          background: #007bff;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          margin-top: 10px;
        }
        .demo-button:hover {
          background: #0056b3;
          text-decoration: none;
          color: white;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🌸 一言 API</h1>
        
        <div class="api-item">
          <h3>GET /api/hitokoto</h3>
          <p>获取随机一言（纯文本格式）</p>
          <a href="/api/hitokoto" class="demo-button">试试看</a>
        </div>

        <div class="api-item">
          <h3>POST /api/hitokoto</h3>
          <p>添加新的一言</p>
          <p>参数: <code>text</code> - 要添加的一言内容</p>
        </div>

        <div style="text-align: center; margin-top: 40px; color: #888;">
          <p>一个简单的一言API服务</p>
          <p>部署在 Vercel 上</p>
        </div>
      </div>
    </body>
    </html>
  `);
}