const express = require("express");
const app = express();
const port = 3000;
const Peer = require("peerjs-nodejs");
var raspividStream = require("raspivid-stream");
const peer = new Peer("Howl1234");
var videoStream = raspividStream();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  const conn = peer.connect("HowlClient1234");

  videoStream.on("data", (data) => {
    ws.send(data, { binary: true }, (error) => {
      conn.on("open", () => {
        conn.send(data);
      });
      if (error) console.error(error);
    });
  });
});
