import Job from "../models/jobModel.js";
import { StatusCodes as Status } from "http-status-codes";

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(Status.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(Status.CREATED).json({ job });
};
// try {
//   const { company, position } = req.body;
//   const job = await Job.create({ company, position });
//   res.status(Status.CREATED).json({ job });
// } catch (error) {
//   console.log(error);
//   res.status(500).json({ msg: "Server Error" });
// }

export const getJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.status(Status.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(Status.OK).json({ msg: "Job Modified", job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);
  res.status(Status.OK).json({ msg: "Job Deleted", job: removedJob });
};
