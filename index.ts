import { handler } from "./build/handler.js";
import http from "node:http";
import { WebSocketServer } from "ws";
import { setupWebSocketServer } from "./websocket.ts";

const server = http.createServer((req, res) => {
  handler(req, res, () => {
    /* empty */
  });
});

const wss = new WebSocketServer({ server });
setupWebSocketServer(wss, server);

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
