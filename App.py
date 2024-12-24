import os

import fastapi
from fastapi.staticfiles import StaticFiles


webApi = fastapi.FastAPI()
webApi.mount("/", StaticFiles(directory="./FrontEnd/pages/", html=True), name="static")

@webApi.get("/api/")
async def root():
    return {"message": "Hello World"}


if __name__ == "__main__":
    # starts the API server (to register the endpoints)
    import uvicorn
    port = int(os.environ.get("API_PORT", 8000))
    host = os.environ.get("APP_HOST", "127.0.0.1")
    uvicorn.run("App:webApi", host=host, port=port, reload=True)
    
    
