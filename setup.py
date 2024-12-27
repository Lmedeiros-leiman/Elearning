import os
import fastapi
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

WebServer = fastapi.FastAPI()


#
# API routes
#
@WebServer.get("/api/")
async def ApiRoute():
    pass



#
# HTML routes
#

WebServer.mount("/assets", StaticFiles(directory="./pages/build", html=True), name="static")

@WebServer.get("/")
async def MainPage():


    return FileResponse("./pages/build/index.html")

@WebServer.get("/auth")
async def AuthPage():

    return FileResponse("./pages/build/auth/index.html")


# starts the local server
if __name__ == "__main__":
    import uvicorn

    port = int(os.environ.get("API_PORT", 8000))
    host = os.environ.get("APP_HOST", "127.0.0.1")
    debug = os.environ.get("DEBUG", False)

    uvicorn.run("setup:WebServer", host=host, port=port, reload=debug) 