import { google } from "googleapis";

console.log(process.env.GOOGLE_API_KEY);

const youtube = google.youtube({
  version: "v3",
  auth: process.env.GOOGLE_API_KEY,
});

const getVideoDetail = (videoId: string) => {
  youtube.videos.list(
    {
      id: videoId,
      part: "snippet",
    } as any,
    (err: any, response: any) => {
      if (err) {
        console.log(err);
      } else {
        const video = response.data.items[0];
        console.log("Video title:", video.snippet.title);
        console.log("Video description:", video.snippet.description);
        console.log("Video thumbnail:", video.snippet.thumbnails.default.url);
      }
    }
  );
};

export { youtube, getVideoDetail };
