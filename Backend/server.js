const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/plain');

    if (url === '/' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Welcome to the Home Page!' }));
    }
    else if (url === '/about' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'This is the About Page.' }));
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Page Not Found' }));
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
