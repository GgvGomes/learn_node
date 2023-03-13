const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// resp -> mandar resposta pra usuário
const server = http.createServer((req, resp)=> {
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/plain');

    // resposta para user
    resp.end('Hello World');
})

// padrão -> porta, host(default: localhost)
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/music_streming/index.js`)
})