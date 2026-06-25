#!/bin/bash
SECURE=true
if $SECURE; then
    ./bin/certs.sh && python3 bin/https.py
else
    echo "Starting HTTP server..."
    python3 -m http.server 1985
    if [ $? -eq 0 ]; then
        echo "Server is running on http://localhost:1985"
    else
        echo "Failed to start the server."
    fi
fi