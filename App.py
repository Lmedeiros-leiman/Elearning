import fastapi
from fastapi.responses import HTMLResponse

webApi = fastapi.FastAPI()

@webApi.get("/")
def root():
    return {"message": "Hello World"}

