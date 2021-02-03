const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.get('/', (req, res)=> {
    res.send('<h1>Hello World</h1>');
});

http.listen(3000, ()=>{
    console.log('listning on port 3000');
});

io.on('connection', (socket) =>{
    console.log('Client connected');
    dataUpdate(socket);
});

function dataUpdate(socket) {
    socket.emit('dataupdate', Array.from({length: 8}, ()=> Math.floor(Math.random() * 40)));

    setTimeout(() =>{
        dataUpdate(socket);
    }, 2000)
}