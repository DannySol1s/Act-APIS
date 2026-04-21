from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI(title="API Python - Proxy Perfil")

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "API Python - Proxy RandomUser API", "endpoints": ["/user"]}

@app.get("/user")
async def get_user(results: int = 1):
    url = f"https://randomuser.me/api/?results={results}"
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(url)
            response.raise_for_status()
            data = response.json()
            # Devolvemos solo los resultados
            return data["results"]
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
