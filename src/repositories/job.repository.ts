import { jobs, Prisma, PrismaPromise } from "@prisma/client";
import prisma from "../database.js";
import { Job, PartialJobEntity, JobWithSkills } from "../protocols/job.js";

export function selectJobs(): PrismaPromise<JobWithSkills[]> {
    return prisma.jobs.findMany({
        include: {
            jobs_skills: {
                select: {
                    id: true,
                    skills: true
                }
            }
        }
    });
}

export function insertJob(job: Job): Prisma.Prisma__jobsClient<jobs, never> {
    return prisma.jobs.create({data: job});
}

export function updateJob(id: number): Prisma.Prisma__jobsClient<jobs, never> {      
    return prisma.jobs.update({
        where: {id},
        data: {
            summoned: true
        }
    });
}

const jobRepository = {
    selectJobs,
    insertJob,
    updateJob
};

export default jobRepository;