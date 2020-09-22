const express = require('express');
const fallback = require('express-history-api-fallback');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require("path");

const app = express();
const dir = path.resolve(__dirname, './dist');
app.use(express.static(dir));
app.use(fallback('index.html', { root: dir }));

app.use('/api', createProxyMiddleware({ target: 'http://www.example.org', changeOrigin: true }));

app.listen(9999, () => {
  console.log('http://localhost:9999');
});
