from app.services.twin_service import twin_service

while True:

    question = input("You: ")

    if question.lower() == "exit":
        break

    reply = twin_service.chat(
        "user001",
        question
    )

    print("\nTwin:", reply)
    print()