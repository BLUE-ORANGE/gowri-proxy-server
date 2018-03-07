const express = require('express')
// const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
var proxy = require('http-proxy-middleware');

// app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/../public/')));

app.use('/v1/product/*', proxy({target:'http://localhost:3003/', changeOrigin:true}));
app.use('/v1/products/*', proxy({target:'http://localhost:3001/', changeOrigin:true}));
app.use('/v1/shops/*', proxy({target:'http://localhost:3001/', changeOrigin:true}));


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
}); 