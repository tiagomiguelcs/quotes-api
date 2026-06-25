#!/bin/bash
FILE1="localhost.key"
FILE2="localhost.crt"
if [[ -f "$FILE1" && -f "$FILE2" ]]; then
    exit 0
else
    echo "Creating self-signed certificate for localhost..."
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt
fi
