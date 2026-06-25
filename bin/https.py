from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain(
    certfile="localhost.crt",
    keyfile="localhost.key"
)

httpd = HTTPServer(("localhost", 4444), CORSRequestHandler)
httpd.socket = context.wrap_socket(httpd.socket, server_side=True)

print("Server is running on https://localhost:4444")
httpd.serve_forever()