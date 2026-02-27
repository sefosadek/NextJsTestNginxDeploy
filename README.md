# Next.js Nginx Demo

A simple Next.js project configured for static export so it can be uploaded directly to Nginx.

## Local Run

```bash
npm install
npm run dev
```

## Build Static Files

```bash
npm run build
```

After this command, the generated static site will be in the `out/` folder.

If you want to preview it locally:

```bash
npm run preview
```

## Upload to Nginx

1. Upload the contents of `out/` to your server (for example `/var/www/nextjs-nginx-demo`).
2. Use the Nginx sample config in `nginx-nextjs-static.conf`.
3. Enable the site and reload Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```
