import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { ERR_MSG_INVALID_VIDEO_URL, ERR_MSG_SHARED_VIDEO } from "../constants";
import VideoModel from "../models/Video";
import { getVideoDetail } from "../utils/youtube";
import { YOUTUBE_URL } from "./../constants/string";

const saveVideo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const videoUrl = req.body.videoUrl;
    const videoId = videoUrl.replace(YOUTUBE_URL, "");

    const isExistedVideo = await VideoModel.findOne({ url: videoUrl }).exec();

    if (isExistedVideo) {
      throw createHttpError(400, ERR_MSG_SHARED_VIDEO);
    }

    const video = await getVideoDetail("FNYRb_c-WYQ");

    if (!video) {
      throw createHttpError(400, ERR_MSG_INVALID_VIDEO_URL);
    }

    const newVideo = await VideoModel.create({
      userId: req.session.userId,
      videoId,
      title: video.title,
      description: video.description,
      thumbnail: video.thumbnail,
    });

    res.status(200).json(newVideo);
  } catch (error) {
    next(error);
  }
};

export { saveVideo };
