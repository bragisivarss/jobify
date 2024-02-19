import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobControllers.js";

import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

// router.get("/", getAllJobs)
// router.post("/", CreateJob)

router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(validateJobInput, updateJob)
  .delete(validateIdParam, deleteJob);

export default router;
