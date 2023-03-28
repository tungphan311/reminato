import { URL_PATTERN } from "./../constants/string";
import createHttpError from "http-errors";
import { NextFunction, Request, Response } from "express";
import { ERR_MSG_INVALID_VIDEO_URL } from "../constants";

const validVideoUrl = (req: Request, res: Response, next: NextFunction) => {
  const videoUrl = req.body.videoUrl;

  if (URL_PATTERN.test(videoUrl)) {
    next();
  } else {
    throw createHttpError(400, ERR_MSG_INVALID_VIDEO_URL);
  }
};

export { validVideoUrl };
