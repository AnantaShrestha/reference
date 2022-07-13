const app = require("express")();
const http = require("http").createServer(app);
const PORT = 8080;
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use((req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  next();
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
