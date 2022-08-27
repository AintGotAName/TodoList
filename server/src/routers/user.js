import { Router } from "express";

import { get } from "../controllers";

const router = Router();

router.get("/:_id", get);

export default router;
