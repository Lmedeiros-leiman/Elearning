import fastapi
from fastapi.responses import FileResponse

def createRoutes(WebServer : fastapi.FastAPI):
    @WebServer.get("/auth")
    async def AuthPage():
        return FileResponse("./pages/build/auth/index.html")
    
    @WebServer.post("/auth/login" )
    def LoginRoute():
        return {"message": "Hello World"}
    
    @WebServer.post("/auth/refresh")
    def RefreshRoute():
        return {"message": "Hello World"}
    
    @WebServer.post("/auth/register")
    def RegisterRoute():
        return {"message": "Hello World"}
    
    @WebServer.post("/auth/logout")
    def LogoutRoute():
        return {"message": "Hello World"}
    
    @WebServer.post("/auth/update")
    def UpdateRoute():
        return {"message": "Hello World"}
    
    @WebServer.post("/auth/delete")
    def DeleteRoute():
        return {"message": "Hello World"}
    pass



