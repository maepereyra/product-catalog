
const express = require('express');
const app = express();
const port = 3000;

// In-memory product catalog
let products = [
  { id: 1, name: 'laptop', price: 10.99 },
  { id: 2, name: 'Product 2', price: 19.99 },
  { id: 3, name: 'Product 3', price: 5.99 },
];

// Get all products
app.get('/products', (req, res) => {
  res.send(products);
});

// Get a specific product by ID
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send('Product not found');
  }
});

// Add a new product
app.post('/products', express.json(), (req, res) => {
  const product = req.body;
  product.id = products.length + 1;
  products.push(product);
  res.send(product);
});

// Update an existing product
app.put('/products/:id', express.json(), (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);
  if (productIndex !== -1) {
    const product = req.body;
    product.id = id;
    products[productIndex] = product;
    res.send(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
}); 

// Delete a product by ID
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);
  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    res.send('Product deleted');
  } else {
    res.status(404).send('Product not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Product catalog microservice listening at http://localhost:${port}`);
});
