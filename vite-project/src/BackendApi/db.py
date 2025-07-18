import motor.motor_asyncio
import os
from dotenv import load_dotenv
import asyncio

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME")

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)
database = client[DB_NAME]
job_collection = database.get_collection("jobs")

sample_jobs = [
    {
        "title": "Full Stack Developer",
        "company": "Amazon",
        "experience": "1-3 yr",
        "jobType": "Internship",
        "location": "Chennai",
        "salary": 5000
    },
    {
        "title": "Node Js Developer",
        "company": "Tesla",
        "experience": "2-4 yr",
        "jobType": "Full Time",
        "location": "Bangalore",
        "salary": 80000
    },
    {
        "title": "UX/UI Designer",
        "company": "Swiggy",
        "experience": "1-2 yr",
        "jobType": "Remote",
        "location": "Pune",
        "salary": 30000
    },
    {
        "title": "Full Stack Developer",
        "company": "Amazon",
        "experience": "1-3 yr",
        "jobType": "Internship",
        "location": "Bangalore",
        "salary": 5000
    },
    {
        "title": "Node Js Developer",
        "company": "Tesla",
        "experience": "2-4 yr",
        "jobType": "Full Time",
        "location": "Chennai",
        "salary": 80000
    },
    {
        "title": "UX/UI Designer",
        "company": "Swiggy",
        "experience": "1-2 yr",
        "jobType": "Remote",
        "location": "Hyderabad",
        "salary": 30000
    },
    {
        "title": "Full Stack Developer",
        "company": "Amazon",
        "experience": "1-3 yr",
        "jobType": "Internship",
        "location": "Pune",
        "salary": 5000
    },
    {
        "title": "Node Js Developer",
        "company": "Tesla",
        "experience": "2-4 yr",
        "jobType": "Full Time",
        "location": "Chennai",
        "salary": 80000
    },
]

async def seed():
    await job_collection.delete_many({})
    await job_collection.insert_many(sample_jobs)
    print("✅ Sample jobs inserted successfully.")

if __name__ == "__main__":
    asyncio.run(seed())
