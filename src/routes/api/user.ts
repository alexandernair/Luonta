import config from "config";
import { Router, Response } from "express";
import { check, validationResult } from "express-validator/check";
import gravatar from "gravatar";
import HttpStatusCodes from "http-status-codes";

import Payload from "../../types/Payload";
import Request from "../../types/Request";
import Park, { IPark } from "../../models/Park";
import { responsiveFontSizes } from "@material-ui/core";

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
router.get(
  "/",
  async (req: Request, res: Response) => {
    return res.status(200).json({message : "lmao"});
  }
);

export default router;
