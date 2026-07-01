1. Install Python 3.13

2. Install Docker Desktop

3. Open Docker Desktop

4. Run Qdrant

docker run -d --name qdrant -p 6333:6333 qdrant/qdrant

5. Install dependencies

pip install -r requirements.txt

6. Create .env file

GEMINI_API_KEY=your_api_key

7. Run backend

uvicorn app.main:app --reload

8. Open

http://127.0.0.1:8000/docs