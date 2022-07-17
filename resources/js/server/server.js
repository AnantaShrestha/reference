const app = require("express")();
const http = require("http").createServer(app);
const PORT = 5000;
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

app.use((req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  next();
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

var users= []
io.on('connection',function(socket){
   socket.on("userConnected", function (userId) {
        users[userId] = socket.id;
        io.emit('updateUserStatus', users);
        console.log("user connected "+ userId);
    });

})