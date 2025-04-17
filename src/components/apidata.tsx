import { Animes } from '@/data/Animes';
import { useEffect, useState } from 'react';
import Card3D from './Card3d';
import Select from 'react-select';
import { StylesConfig } from 'react-select';
import { blob } from 'stream/consumers';





export function AnimeSearch() {
  const [selectedAnime, setSelectedAnime] = useState<Animes | null>(null);
  const [querry, setQuerry] = useState('');
  const [options, setOptions] = useState<any[]>([]);
  const customStyles: StylesConfig<any, false> = {
  control: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: 'transparent'
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
    setSelectedAnime(option.fullData);
    setQuerry("");
    setOptions([]);
    
  }

  return (
  <div className="p-4 grid grid-cols-6 grid-rows-6 w-screen h-screen">
    <div className={`transition-all ${
    selectedAnime ? 'col-start-3 col-end-5' : 'row-start-3 col-start-3 col-end-5'
  }`}>
    <h1 className="text-2xl font-bold mb-4">Buscar Animes</h1>

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
          <img src={e.image} alt={e.label} className="w-8 h-10 object-cover rounded" />
          {e.label}
        </div>
      )}
    /></div>

    {selectedAnime && (
      <div className=' transition-transform duration-1000 p-1 col-start-2 col-end-6 row-start-2 row-end-6 gap-3 grid grid-cols-4 grid-rows-4 bg-transparent relative'>
        <div className='absolute inset-0 blur-2xl bg-center bg-cover object-contain'
          style={{ backgroundImage: `url(${selectedAnime.images.jpg.large_image_url})` }}>
        </div>

        <h2 className='flex justify-center items-center col-start-1 font-bold z-10'>
          {selectedAnime.title_english}
        </h2>

        <div className='row-start-2 col-start-1 row-end-5 z-10 object-contain'>
          <img
            src={selectedAnime.images.jpg.large_image_url}
            alt={selectedAnime.title}
            className="w-full h-full rounded"
          />
        </div>

        <div className='col-start-3 row-start-2 grid z-10'>
          <p className="font-bold text-center justify-center items-center grid">
            Episódios: {selectedAnime.episodes || 'N/A'}
          </p>
        </div>

        <div className='row-start-3 col-start-3 grid z-10 backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
'>
          <p className="font-bold text-center grid justify-center items-center">
            Nota: {selectedAnime.score || 'N/A'}
          </p>
        </div>

        <div className='overflow-y-auto col-start-2 row-start-2 row-end-5 grid z-10 relative '>
          <p className=" text-sm text-center absolute grid justify-center items-center">
            {selectedAnime.synopsis}
          </p>
        </div>

        <div className='grid z-10'>
          <p className='font-bold grid justify-center items-center'>
            Já terminou? {selectedAnime.demographics[0].name}
          </p>
        </div>
      </div>
    )}
  </div>
)
};
