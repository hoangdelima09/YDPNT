import { handleChat, handleVerify } from "./functions/_lib/core.js";

const ROUTES = {
  "/api/chat": handleChat,
  "/api/verify": handleVerify,
};

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    const handler = ROUTES[pathname];
    if (!handler) return new Response("Not found", { status: 404 });
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: { Allow: "POST" } });
    }
    return handler(request, env);
  },
};
