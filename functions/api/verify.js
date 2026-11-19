import { handleVerify } from "../_lib/core.js";
export const onRequestPost = ({ request, env }) => handleVerify(request, env);
