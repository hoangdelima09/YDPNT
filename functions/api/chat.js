import { handleChat } from "../_lib/core.js";
export const onRequestPost = ({ request, env }) => handleChat(request, env);
