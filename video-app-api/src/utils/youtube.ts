import axios from "axios";

const YOUTUBE = {
  BASE_URL: "https://youtube.googleapis.com/youtube/",
  VERSION: "v3",
};

const getVideoDetail = async (
  videoId: string
): Promise<ResponseYoutubeVideo | null> => {
  try {
    const result = await axios.get(
      `${YOUTUBE.BASE_URL}/${YOUTUBE.VERSION}/videos?id=${videoId}&part=snippet&key=${process.env.GOOGLE_API_KEY}`
    );

    if (!result.data.items || !result.data.items.length) return null;
    const {
      snippet: { title, description, thumbnails },
    } = result.data.items[0];

    return {
      title,
      description,
      thumbnail: thumbnails.standard.url,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { getVideoDetail };
