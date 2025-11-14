import type { HttpServer } from "vite";
import type { Server } from "ws";

export function setupWebSocketServer(wss: Server, server: HttpServer) {
  wss.on("connection", (ws) => {
    console.log("Client connected");
    ws.send("Connected to server");

    ws.on("close", () => {
      console.log("Client disconnected");
    });

    server.on("close", () => {
      wss.close();
    });
  });
}
