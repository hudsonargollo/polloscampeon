#!/bin/bash
# Pollos Campeón store — manual fallback for the systemd service.
#
# Production is normally managed by systemd (`polloscampeon.service`), which runs
# this same server from the deployed directory. Use this script only to run the
# build by hand (e.g. before the unit exists or for debugging).
#
#   systemctl status polloscampeon.service
#   systemctl restart polloscampeon.service
#
# Environment (DATABASE_URL, AUTH_SECRET, …) is not read from .env here: export
# it in the shell first, or point the systemd unit at the file instead.
set -u

APP_DIR="${APP_DIR:-/var/www/polloscampeon}"
PORT="${PORT:-3015}"
HOST="${HOST:-0.0.0.0}"

cd "$APP_DIR" || exit 1

export NODE_ENV=production
export PORT
export HOSTNAME="$HOST"

exec node server.js
