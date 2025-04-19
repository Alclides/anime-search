"use client"
import { Animes } from '@/data/Animes';
import { useEffect, useState } from 'react';
import { StylesConfig } from 'react-select';
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

export function AnimeSearch() {
  const [selectedAnime, setSelectedAnime] = useState<Animes | null>();
  const [querry, setQuerry] = useState('');
  const [options, setOptions] = useState<any[]>([]);
  const customStyles: StylesConfig<any, false> = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: 'transparent',
    borderRadius: 'var(--radius-xl)',
    
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "transparent" : 'transparent',
    
  }),

  input: (baseStyles) => ({
    ...baseStyles,
    color: 'white'
  }),

  menu: (provide) => ({
    ...provide,
    backgroundColor: 'transparent',
    backdropFilter: 'blur(5px)',
    border: '1px solid #ccc'
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
  <div className=" lg:grid gap-2 sm:grid-cols-4 sm:grid-rows-4 lg:grid-cols-7 lg:grid-rows-7 w-screen h-screen place-se">
    
    <div className={`${
    selectedAnime ? 'col-start-3 col-end-5' : 'row-start-3 col-start-3 col-end-6'
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
        <div className="flex items-center gap-2 text-black bg-transparent">
          <img src={e.image} alt={e.label} className="w-8 h-10 object-cover rounded-md" />
          {e.label}
        </div>
      )}
    /></div>

    

    {selectedAnime && (
      

        <>
        <div className='lg:grid gap-2 sm:grid xl:col-start-2 lg:grid-cols-11 lg:col-start-1 lg:col-end-8 xl:col-end-7 xl:grid-rows-10 sm:grid-rows-1 col-end-7 row-start-2 rounded-3xl xl:row-end-6 lg:row-end-7  bg-cover bg-center'>

        
        <div className=' sm:row-start-2 col-start-2 col-end-6 mr-7 ml-3 row-start-2 row-end-8 place-items-center grid

'>
              <h2 className=' text-center font-bold font-mono items-center text-5xl text-yellow-300'>
                {selectedAnime.title_english}</h2>
        </div>

        {selectedAnime.trailer.youtube_id && (
        <div className='col-start-2 text-red-200 col-end-5 row-start-1 contrast-150 italic text-4xl hover:underline'>
          <a href={`https://www.youtube.com/watch?v=${selectedAnime.trailer.youtube_id}`} rel="noopener noreferrer" target='_blank' className='italic' >Assista ao Trailer <FaYoutube />
          </a>
          </div>)}

        <div className='col-start-1 col-end-3 row-start-8 rounded-3xl row-end-11 p-2 m-1 backdrop-filter backdrop-blur-sm bg-opacity-10 border grid border-gray-100'>
          <p className='text-white place-self-center'> Lançamento: </p>
          <div className='col-start-1 gap-1 items-center justify-center flex bg-transparent w-full h-full rounded-full'>
            <p className='text-white text-5xl'>{selectedAnime.aired.prop.from.day}. </p>
            <p className='text-white col-start-2'>{selectedAnime.aired.prop.from.month}. </p>
            <p className='text-white'>  {selectedAnime.aired.prop.from.year}</p>
          </div>
          
        </div>

        <div className=' overflow-clip items-center col-start-3 col-end-6 backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 row-start-9 grid grid-cols-2 grid-rows-3 row-end-11 p-2 m-1 rounded-3xl'>
          <p className='inline-flex gap-1'>Finalizado? {selectedAnime.airing ? <svg xmlns="http://www.w3.org/2000/svg" fill="fill" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" fill="fill" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>}
              </p>
              <p className='row-start-2'>Episodios: {selectedAnime.episodes ? selectedAnime.episodes :'N|A'} </p>
              <p className=' line-clamp-1 row-start-3'>Duração: {selectedAnime.duration.slice(0, 7)} por ep </p>
              <p className=' line-clamp-1 place-self-end overflow-hidden col-start-2 row-start-2'>Studio: {selectedAnime.studios[0].name} ? {selectedAnime.studios[0].name} : 'N|A' </p>
              <p className='place-self-end'>Fonte: {selectedAnime.source}</p>

        </div>

        
        {selectedAnime.background && (
        <div className='col-start-10 col-end-12 backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 row-start-7 row-end-11 p-2 m-1 rounded-3xl z-10 overflow-y-auto no-scrollbar hover:animate-bounce'>
          <p className=" text-sm text-center justify-center p-1   items-center">{selectedAnime.background}</p>
        </div>
        )}

        <div className='col-start-9 col-end-12 row-start-2 row-end-8 grid backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-2 m-1 rounded-3xl z-0 hover:z-20 grid-rows-auto'> 
          <div className='font-bold'>Sinopse:
          </div>
          <div className='overflow-y-auto scrollbar-hide max-h-64 p-1 no-scrollbar'>
          <p className=" text-sm text-center justify-center p-1   items-center">
            {selectedAnime.synopsis}
          </p>
          </div>

          
        </div>

        <div className='col-start-1 row-start-3 xl:row-end-8 p-1b  grid xl:grid-cols-3 m-1 rounded-3xl backdrop-filter backdrop-blur-md grid-rows-7 bg-opacity-10 border border-gray-100'>
          <p className=' lg:text-white col-start-2'>MC</p>
          <p className='place-self-center lg:text-white col-start-2 row-start-2'> {selectedAnime.score}
          </p>

          <div className='col-start-1 lg:text-amber-50 row-start-2 place-self-center-safe animate-spin'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg> </div>

                <div className='row-start-3 lg:text-amber-50 place-self-center animate-bounce'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
              </svg>
              </div>

              <div className='col-start-2 lg:text-amber-50 row-start-3 place-self-center'> {selectedAnime.rank}</div>

              <div className='col-start-1 lg:text-amber-50 row-start-4 place-self-center'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:fill-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
              </div>

              <div className='col-start-2 text-amber-50 row-start-4 col-end-4 place-self-center'> {selectedAnime.members}</div>

              <div className='col-start-1 lg:text-amber-50 row-start-5 place-self-center'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0  0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
              </svg>
              </div>
              
              <div className='col-start-2 col-end-3 lg:text-amber-50 row-start-5 place-self-center'>{selectedAnime.popularity}  </div>


              <a href={selectedAnime.url} rel="noopener noreferrer" target='_blank' className='col-start-1 col-end-4 row-start-6 row-end-8 place-self-center'><div className='bg-blue-400 border rounded-xl p-1'>MetaCritic </div></a>

        
        </div>

        <div className='col-start-9 col-end-12 backdrop-filter grid grid-cols-4 backdrop-blur-sm bg-opacity-10 border border-gray-100 p-1 m-1 rounded-3xl'> 
          <a href="https://github.com/Alclides" rel="noopener noreferrer" target='_blank' className='col-start-1 place-self-center' > <FaGithub className='hover:animate-bounce' /></a>
          <a href="https://x.com/Alclides_" rel="noopener noreferrer" target='_blank' className='col-start-2 place-self-center '><FaXTwitter className='hover:animate-bounce' /></a>
          <a href="https://www.instagram.com/alclidess/" rel="noopener noreferrer" target='_blank' className='col-start-3 place-self-center'><FaInstagram className='hover:animate-bounce'/> </a>
          <a href="https://www.linkedin.com/in/alclides-oliveira-b4623a1a3/"rel="noopener noreferrer" target='_blank' className='col-start-4 place-self-center'><FaLinkedin className='hover:animate-bounce'/></a>
          </div>

        <div className=' sm:row-start-3 col-start-6 col-end-9 row-start-2 row-end-12 mr-2 p-2 rounded-b-3xl overflow-hidden'> 
          <img
            src={selectedAnime.images.jpg.large_image_url}
            alt={selectedAnime.title}
            className="w-full h-full destaque rounded-md"
          /></div>

        </div>

        

        
        </>


   

        
     
    )}
  </div>
)
};
