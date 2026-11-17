// A local classroom server with an explicit allowlist of public files.
import http from 'node:http';
import { readFile } from 'node:fs/promises';
const publicFiles = {
  '/': ['index.html', 'text/html'],
  '/src/app.js': ['src/app.js', 'text/javascript'],
  '/src/calculator.js': ['src/calculator.js', 'text/javascript'],
};
http.createServer(async (req, res) => {
  const entry = publicFiles[new URL(req.url, 'http://localhost').pathname];
  if (!entry) { res.writeHead(404); res.end('Not found'); return; }
  try {
    const data = await readFile(new URL(entry[0], import.meta.url));
    res.writeHead(200, { 'Content-Type': entry[1] + '; charset=utf-8' });
    res.end(data);
  } catch {
    res.writeHead(500); res.end('Could not load file');
  }
}).listen(3000, '127.0.0.1', () => console.log('Open http://127.0.0.1:3000'));
