import { Router } from "express";

import { get, makeTask } from "../controllers";

const router = Router();

router.get("/:_id", get).post("/:_id", makeTask);

export default router;
