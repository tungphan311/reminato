import { NextFunction, Request, Response } from "express";
import { getVideoDetail } from "../utils/google";

const saveVideo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.body.id;

    await getVideoDetail(id);
  } catch (error) {
    next(error);
  }
};

export { saveVideo };
