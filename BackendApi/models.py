from pydantic import BaseModel
from typing import Optional
# from fastapi import Body

class Job(BaseModel):
    title: str
    company: str
    experience: str
    jobType: str
    location: str
    salary: int
