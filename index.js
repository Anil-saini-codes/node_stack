const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// console.log('Hello, World!');

app.get('/', (req, res) => {
    res.send('Hello, World Anil !');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

app.get('/about/user', (req, res) => {
    res.send('<h1>User Page</h1>');
});

app.get('/user/:userid/book/:bookid', (req, res) => {
    res.send(`<h1>User Page</h1><p>User ID: ${req.params.userid}</p><p>Book ID: ${req.params.bookid}</p>`);
});

app.get('/user/:userid-:bookid', (req, res) => {
    res.send(req.params);
});

app.get('/search', (req, res) => {
    res.send(req.query);
});