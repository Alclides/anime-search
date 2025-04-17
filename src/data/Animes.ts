export type Animes  = {
   mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
    };
  };
  episodes: number;
  score: number;
  synopsis: string;
  airing: boolean
  apagarAll: string

}