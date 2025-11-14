import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { type ViteDevServer, defineConfig } from "vite";
import { WebSocketServer } from "ws";
import { setupWebSocketServer } from "./websocket.js";

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    {
      name: "vite-plugin-websocket",
      apply: "serve",
      configureServer(server: ViteDevServer) {
        if (!server.httpServer) throw new Error("httpServer not available");
        const wss = new WebSocketServer({ port: 5174 });
        setupWebSocketServer(wss, server.httpServer);
      },
    },
  ],
});
