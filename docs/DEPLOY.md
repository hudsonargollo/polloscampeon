# Despliegue en producción — Pollos Campeón

Producción corre en un **VPS propio (Ubuntu) con systemd + nginx**. Netlify, Vercel y
Cloudflare no se usan para el sitio en vivo.

## Topología actual

| Elemento | Valor |
| -------- | ----- |
| URL pública | <https://polloscampeon.clubemkt.digital> |
| Código fuente | `/root/ClubeMkt/polloscampeon` |
| Build desplegado | `/var/www/polloscampeon` (`server.js`, `.next/`, `public/`) |
| Servicio | `polloscampeon.service` (systemd) |
| Puerto interno | `3004` (`PORT` en la unit) |
| Proxy | nginx `sites-enabled/polloscampeon` → `http://172.17.0.1:3004` |
| Variables de entorno | `EnvironmentFile=/root/ClubeMkt/polloscampeon/.env` |
| Uploads | `UPLOAD_DIR=/var/www/polloscampeon-data/uploads` |
| Base de datos | PostgreSQL (`DATABASE_URL` / `DIRECT_URL` en `.env`) |

`next.config.ts` genera `output: "standalone"` en el VPS (en Netlify/Vercel se
desactiva porque esas plataformas empaquetan la app por su cuenta).

> Corre **una sola instancia**: las alertas de pedidos y el rate limit viven en
> memoria del proceso.

## Desplegar

```bash
cd /root/ClubeMkt/polloscampeon
git pull
bash scripts/deploy.sh
```

El script:

1. `npm install` y `npx prisma generate`.
2. `npx prisma migrate deploy`.
3. `npm run build`.
4. Copia el build standalone a `/var/www/polloscampeon` (sin `node_modules`) y
   sincroniza `public/`.
5. Limpia `.next/cache` y reinicia `polloscampeon.service`.
6. Comprueba `http://127.0.0.1:3004/` hasta obtener `200`.

## Operación

```bash
systemctl status polloscampeon.service
systemctl restart polloscampeon.service
journalctl -u polloscampeon.service -f
curl -I http://127.0.0.1:3004/
curl -s http://127.0.0.1:3004/api/health
```

`start-store.sh` es solo un respaldo manual para arrancar el build desplegado;
lo normal es usar systemd.

## Migraciones

- `deploy.sh` aplica las pendientes con `prisma migrate deploy`.
- En local: `npm run db:migrate` para crear/aplicar una migración nueva.
- Estado: `npx prisma migrate status` (debe decir *Database schema is up to date*).

## Uploads

Las imágenes subidas desde el panel se guardan **fuera** del build, en
`UPLOAD_DIR`, y se sirven por `/uploads/products/[file]` y
`/uploads/references/[file]`. El despliegue no toca esa carpeta. Respalda
`/var/www/polloscampeon-data/uploads`.

## Rollback

```bash
git checkout <commit-anterior>
bash scripts/deploy.sh
```

Las migraciones son solo hacia adelante: para revertir una hay que restaurar la
base de datos.

## Alternativas no usadas

El repo conserva `Dockerfile`, `netlify.toml`, `vercel.json` y `wrangler.jsonc`
como andamiaje opcional. El destino real es el VPS.
