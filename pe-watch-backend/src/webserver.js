import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const jsonProxy = createProxyMiddleware({
    target: 'http://localhost:8003', // target host with the same base path
    changeOrigin: true, // needed for virtual hosted sites
    
    // pathRewrite: {'^/api': ''}
    // onProxyReq: (proxyReq, req, res) => {
    //   console.log('Proxying request for', req.url)
    //   console.log('Request headers:', req.headers)
    //   console.log('Proxy request headers:', proxyReq.getHeaders())
    // }
});

app.use('/api', jsonProxy);

const videoProxy = createProxyMiddleware({
  target: 'http://localhost:8002',
  changeOrigin: true,
})

app.use('/live',videoProxy)
  

  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})