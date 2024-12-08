from fastapi import FastAPI
import httpx
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

ZEN_QUOTES_URL = "https://zenquotes.io/api/today"

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/today")
async def get_quote():
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(ZEN_QUOTES_URL)
            response.raise_for_status()  # Проверка на ошибки HTTP
            data = response.json()
            return JSONResponse(content=data)
        except httpx.RequestError as e:
            return JSONResponse(
                content={"error": f"Ошибка соединения: {e}"}, status_code=500
            )
        except httpx.HTTPStatusError as e:
            return JSONResponse(
                content={"error": f"Ошибка HTTP: {e.response.status_code}"},
                status_code=e.response.status_code,
            )
