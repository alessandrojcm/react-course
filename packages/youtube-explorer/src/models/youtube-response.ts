import { YoutubeVideo } from './youtube-video';

export interface YoutubeResponse {
  kind: 'youtube#searchListResponse';
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YoutubeVideo[];
}
