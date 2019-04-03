export interface UnsplashResponse {
  results: Array<{ urls: Record<'regular', string>; id: string }>;
}
