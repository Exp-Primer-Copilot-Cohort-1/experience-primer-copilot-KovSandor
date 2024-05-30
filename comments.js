// Create web server
// 1. Import express module
// 2. Create an express application
// 3. Define a route
// 4. Start the server
// 5. Test the server

// 1. Import express module
const express = require('express');

// 2. Create an express application
const app = express();

// 3. Define a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// 4. Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// 5. Test the server
// Open web browser and navigate to http://localhost:3000
// Output: Hello World
// Press Ctrl+C to stop the server

// 6. Define a route to return a list of comments
app.get('/comments', (req, res) => {
    res.json([
        { id: 1, author: 'John Doe', body: 'Hello, World!' },
        { id: 2, author: 'Jane Doe', body: 'Hi, there!' }
    ]);
});

// 7. Test the route
// Open web browser and navigate to http://localhost:3000/comments
// Output: [{"id":1,"author":"John Doe","body":"Hello, World!"},{"id":2,"author":"Jane Doe","body":"Hi, there!"}]
// Press Ctrl+C to stop the server

// 8. Define a route to return a single comment
app.get('/comments/:id', (req, res) => {
    const comment = {
        id: parseInt(req.params.id),