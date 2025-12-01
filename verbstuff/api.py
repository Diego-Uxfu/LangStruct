#api imports
from fastapi import FastAPI
from pydantic import BaseModel
import random

from starlette.middleware.cors import CORSMiddleware

#file import
from verb_fsm import *

app = FastAPI()

# ADD THIS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:3000"] for tighter security
    allow_credentials=True,
    allow_methods=["*"],  # MUST include OPTIONS for preflight
    allow_headers=["*"],
)

irregulars = get_irregulars()
all_verbs = list_all_verbs()

class CheckRequest(BaseModel):
    verb: str
    user_answer: str

@app.get("/random_verb")
def random_verb():
    verb = random.choice(all_verbs)
    return {"verb": verb}

@app.post("/check")
def check_answer(request: CheckRequest):
    verb = request.verb.lower()
    user_input = request.user_answer.strip().lower()

    correct = conjugate(verb, irregulars)

    return {
        "verb": verb,
        "correct_answer": correct,
        "user_answer": user_input,
        "is_correct": user_input == correct
    }
