# Next.js Nginx Demo

A simple Next.js project configured for Node production mode behind Nginx.

## Local Run

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Run in Production Mode

```bash
npm run start
```

## Upload to Nginx

1. Deploy the project and run it with Node (`npm run build` then `npm run start`).
2. Use the Nginx sample config in `nginx-nextjs-node.conf` to reverse proxy to `127.0.0.1:3000`.
3. Enable the site and reload Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```
