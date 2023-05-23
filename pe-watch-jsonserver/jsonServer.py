
import sys
import json
import threading
from http.server import BaseHTTPRequestHandler, HTTPServer


def thread_runner(func):
    def wrapper(*args, **kwargs):
        thd = threading.Thread(target=func, args=args, kwargs=kwargs).start()
        return thd
    return wrapper


class jsonServer:
    def __init__(self,port=8003,path="/api") -> None:
        self.port = port
        self.path = path
        self.p_server = HTTPServer(('0.0.0.0', self.port), self.ReqHandler) 
        #!!! p_server : HTTPServer mount to jsonServer.p_server
        self.p_server.data = {"valid": False}
    def __del__(self):
        self.Stop()

    class ReqHandler(BaseHTTPRequestHandler):
        def do_GET(self):
            if self.path == self.path:
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()  
                json_data = json.dumps(self.server.data)  
                #!!! server: Mount to ReqHandler.server
                self.wfile.write(bytes(json_data, "utf8")) 

    @thread_runner
    def Run(self):
        self.p_server.serve_forever() 
    def Stop(self):
        self.p_server.shutdown()
    def ChangeRespond(self,resp):
        self.p_server.data = resp
    def GetRespond(self):
        return self.data

if __name__ == '__main__':
    serverd = jsonServer()
    serverd.ChangeRespond( {"Hellow":"World"} )
    serverd.Run()
    print("Sever Run ")
    while input("press q to quit: ") != 'q' :
        pass
    serverd.Stop()
    sys.exit()
        
     

    
    


