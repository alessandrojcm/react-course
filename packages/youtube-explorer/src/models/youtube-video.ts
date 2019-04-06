import { YoutubeThumbnail } from './youtube-thumbnail';

export interface YoutubeVideo {
  kind: 'youtube#searchResult';
  etag: string;
  id: {
    kind: string;
    videoId: string;
    channelId: string;
    playlistId: string;
  };
  snippet: {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    channelTitle: string;
    thumbnails: Record<string, YoutubeThumbnail>;
  };
}
