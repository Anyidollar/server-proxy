const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/api', createProxyMiddleware({
  target: 'https://api.rawg.io',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // remove /api from the request URL
  },
}));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});