from fastapi import FastAPI, Query
from typing import Optional, List
from db import job_collection
from models import Job
from bson.objectid import ObjectId
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def job_serializer(job) -> dict:
    job["_id"] = str(job["_id"])
    return job

@app.get("/jobs")
async def get_jobs(
    location: Optional[str] = None,
    jobType: Optional[str] = None,
    min_salary: int = 0,
    max_salary: int = 100000
):
    filters = {}

    if location:
        filters["location"] = location
    if jobType:
        filters["jobType"] = jobType
    filters["salary"] = {"$gte": min_salary, "$lte": max_salary}

    jobs_cursor = job_collection.find(filters)
    jobs = []
    async for job in jobs_cursor:
        jobs.append(job_serializer(job))
    return jobs
