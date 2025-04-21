"use client"
import { Animes } from '@/data/Animes';
import { AnimeTitle} from '@/components/AnimeTitle';
import { AnimeTrailer} from './AnimeTrailer';
import {AnimeDate} from './AnimeDate'
import {AnimeInfo} from './AnimeInfo'
import {AnimeAbout} from './AnimeAbout'
import {AnimeSyno} from './AnimeSyno'
import {AnimeMetac} from './AnimeMetac'
import {AnimeSocial} from './AnineSocial'
import {AnimeImage} from './AnimeImage'
import { useEffect, useState } from 'react';
import { StylesConfig } from 'react-select';

import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

export function AnimeSearch() {
  const [selectedAnime, setSelectedAnime] = useState<Animes | null>();
  const [querry, setQuerry] = useState('');
  const [options, setOptions] = useState<any[]>([]);
  const customStyles: StylesConfig<any, false> = {
  control: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: 'transparent',
    borderRadius: 'var(--radius-xl)',
    
  }),
  option: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',

  }),

  input: (baseStyles) => ({
    ...baseStyles,
    color: 'white'
  }),

  menu: (provide) => ({
    ...provide,
    backgroundColor: 'transparent',
    backdropFilter: 'blur(5px)',
    
  }),

  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: 'white'
  })
};
  useEffect(() => {
    if (querry.length < 3) {
      setOptions([]);
      return;
    }

    fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(querry)}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data.data)
        const animeOptions = data.data.slice(0, 20).map((anime: Animes) => ({
          value: anime.mal_id,
          label: anime.title_english,
          image: anime.images.jpg.image_url,
          fullData: anime
        }));
        
        setOptions(animeOptions);
      })
      .catch((error) => console.error("Erro ao buscar animes:", error));

  }, [querry]);

  

 function handleSelect(option: any) {
  if (option) {
    setSelectedAnime(option.fullData);
  } else {
    setSelectedAnime(null);
  }
  setQuerry("");
  setOptions([]);
}

  const names = [ 
    {value: 1, label: "Alclides"}

  ]

  return (
  <div className="grid w-screen h-screen grid-cols-14 grid-rows-13">
    
    <div className={`${
    selectedAnime ? 'col-start-4 col-span-8 row-start-1 mt-5' : 'col-start-4 col-end-12 row-start-3'
  }` }>
    <h1 className="text-2xl font-bold mb-3">Buscar Animes</h1>
    

    <Select
      styles={customStyles}
      options={options}
      onInputChange={(value) => setQuerry(value)}
      onChange={handleSelect}
      isClearable={true}
      placeholder="Digite o nome do anime..."
      noOptionsMessage={() => {if (selectedAnime) {return null}; return "Nenhum anime encontrado"}}
      getOptionLabel={(e: any) => e.label}
      formatOptionLabel={(e: any) => (
        <div className="flex items-center gap-2 text-white bg-transparent no-scrollbar">
          <img src={e.image} alt={e.label} className="w-8 h-10 object-cover rounded-md" />
          {e.label}
        </div>
      )}
    /></div>

    

    {selectedAnime && (
      

        <>

        <div className="grid-rows-10 grid-cols-11  col-start-3 grid col-end-13 row-end-11 row-start-4 rounded-3xl bg-cover bg-center">
    

        
       
       <AnimeTitle title={selectedAnime.title_english}/>

       <AnimeSocial/>
        

       <AnimeImage Imagem={selectedAnime.images.jpg.large_image_url} Title={selectedAnime.title} />

       <AnimeDate Dia={selectedAnime.aired.prop.from.day} Mes={selectedAnime.aired.prop.from.month} Ano={selectedAnime.aired.prop.from.year}  />

       <AnimeSyno Sinopse={selectedAnime.synopsis}  />
       
       <AnimeAbout About={selectedAnime.background} />
       

       <AnimeInfo  NoAr={selectedAnime.airing} Eps={selectedAnime.episodes} Duracao={selectedAnime.duration.slice(0, 7)} StudioName={selectedAnime.studios[0].name} Fonte={selectedAnime.source} />

       <AnimeTrailer link={selectedAnime.trailer.youtube_id} id={selectedAnime.trailer.youtube_id}/>

       

       

       <AnimeMetac Score={selectedAnime.score} Rank={selectedAnime.rank} Members={selectedAnime.members} Popularity={selectedAnime.popularity}  McURL={selectedAnime.url}/>

       

        
        
                </div>
        
        </>


   

        
     
    )}
  </div>
)
};
