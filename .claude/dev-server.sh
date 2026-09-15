#!/bin/bash
# Fall back to a local Node.js install if npm isn't already on PATH.
command -v npm >/dev/null 2>&1 || export PATH="$HOME/.local/node-lts/bin:$PATH"
cd "$(dirname "$0")/.."
exec npm start
