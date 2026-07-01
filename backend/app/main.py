from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.chat import router as chat_router
from app.routes.memory import router as memory_router
from app.routes.dashboard import router as dashboard_router

app = FastAPI(title="Digital Twin API")

# Allow requests from Next.js
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routes
app.include_router(chat_router)
app.include_router(memory_router)
app.include_router(dashboard_router)


@app.get("/")
def root():
    return {
        "message": "Digital Twin API is Running 🚀"
    }