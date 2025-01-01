import os
from fastapi import FastAPI, Header
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

#
WebServer = FastAPI()
WebServer.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#
# API routes
#
import utils.Auth as Auth


Auth.createRoutes(WebServer)


#
# HTML routes
#

WebServer.mount("/assets", StaticFiles(directory="./pages/build", html=True), name="static")

@WebServer.get("/")
async def MainPage():

    return FileResponse("./pages/build/index.html")

@WebServer.post("/api/test")
async def NewPost():
    
    return {
        "message": "Hello World",
        "head": (Header())
        }





# starts the local server
if __name__ == "__main__":
    import uvicorn

    port = int(os.environ.get("API_PORT", 8000))
    host = os.environ.get("APP_HOST", "127.0.0.1")
    debug = os.environ.get("PRODUCTION", True)

    uvicorn.run("setup:WebServer", host=host, port=port, reload=debug) 