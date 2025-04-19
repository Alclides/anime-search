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
  title_english: string
  trailer : {
    youtube_id: string
  }
  aired:{
    prop:{
      from: {
        day: number,
        month: number,
        year: number
      }
    }
  },
  duration:{
    slice: Function
  },
  background: string,
  rank: number,
  members: number,
  popularity: number
  url: string
  studios: [
    {
      name:string
    }
  ],
  source: string


}