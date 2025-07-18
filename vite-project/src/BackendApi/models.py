from pydantic import BaseModel
from typing import Optional

class Job(BaseModel):
    title: str
    company: str
    experience: str
    jobType: str
    location: str
    salary: int
