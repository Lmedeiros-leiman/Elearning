import os
import fastapi
from fastapi.responses import HTMLResponse

webApi = fastapi.FastAPI()

@webApi.get("/")
def root():
    return {"message": "Hello World"}


if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("API_PORT", 8000))
    uvicorn.run("App:webApi", host="127.0.0.1", port=port, reload=True)

