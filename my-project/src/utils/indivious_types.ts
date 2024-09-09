interface ThumbnailObject {
  // Define properties for ThumbnailObject here
  // Example properties:
  url: string;
  width: number;
  height: number;
}

interface Video {
  type: "video"; // Constant value of "video"

  title: string;
  videoId: string;

  author: string;
  authorId: string;
  authorUrl: string;
  authorVerified: boolean;

  videoThumbnails: ThumbnailObject[];

  description: string;
  descriptionHtml: string;

  viewCount: number; // Integer
  viewCountText: string;
  lengthSeconds: number; // Integer

  published: number; // Unix timestamp
  publishedText: string;

  // Only available on premiered videos
  premiereTimestamp?: number; // Unix timestamp (optional)

  liveNow: boolean;
  premium: boolean;
  isUpcoming: boolean;
}

