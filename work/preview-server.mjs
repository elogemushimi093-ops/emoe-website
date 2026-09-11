import { createReadStream, existsSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = process.argv[2];
const types = { ".css": "text/css", ".html": "text/html", ".jpg": "image/jpeg", ".js": "text/javascript", ".svg": "image/svg+xml" };

createServer((request, response) => {
  const path = normalize(join(root, request.url === "/" ? "index.html" : decodeURIComponent(request.url)));
  if (!path.startsWith(root) || !existsSync(path)) return response.writeHead(404).end("Not found");
  response.writeHead(200, { "content-type": `${types[extname(path)] || "application/octet-stream"}; charset=utf-8` });
  createReadStream(path).pipe(response);
}).listen(4173, "127.0.0.1");
