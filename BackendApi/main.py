from fastapi import FastAPI, Query
from typing import Optional, List
# from fastapi import FastAPI
from db import job_collection
from models import Job
from bson.objectid import ObjectId
from fastapi import Body
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:5174"] for more control
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
def job_serializer(job) -> dict:
    job["_id"] = str(job["_id"])
    return job

@app.get("/jobs")
async def get_jobs(
    role: str = None,
    location: Optional[str] = None,
    jobType: Optional[str] = None,
    min_salary: int = 0,
    max_salary: int = 100000
):
    print("🔍 Filters Received:", {
    "role": role,
    "location": location,
    "jobType": jobType,
    "min_salary": min_salary,
    "max_salary": max_salary,
})

    filters = {}

    if role and role.strip() != "":
        filters["title"] = {"$regex": f".*{role}.*", "$options": "i"}
    if location:
        filters["location"] = location
    if jobType:
        filters["jobType"] = jobType

    filters["salary"] = {"$gte": min_salary, "$lte": max_salary}
    # filters["salary"] = {"$gte": min_salary, "$lte": max_salary}
    print("🧪 MongoDB Filter:", filters)
    jobs_cursor = job_collection.find(filters)
    jobs = []
    async for job in jobs_cursor:
        jobs.append(job_serializer(job))
    return jobs

@app.post("/jobs")
async def create_job(job: Job = Body(...)):
    new_job = await job_collection.insert_one(job.dict())
    created_job = await job_collection.find_one({"_id": new_job.inserted_id})
    return job_serializer(created_job)

