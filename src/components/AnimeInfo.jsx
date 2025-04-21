export function AnimeInfo({NoAr, Eps, Duracao, StudioName, Fonte}) {
    return (

    <div className=' overflow-clip items-center col-start-3 col-end-6 backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 row-start-9 grid grid-cols-2 grid-rows-3 row-end-11 p-2 m-1 rounded-3xl'>
        <p className='inline-flex gap-1'>Finalizado? {NoAr ? <svg xmlns="http://www.w3.org/2000/svg" fill="fill" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" fill="fill" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>}
        </p>
        <p className='row-start-2'>Episodios: {Eps ? Eps : 'N|A'} </p>
        <p className=' line-clamp-1 row-start-3'>Duração: {Duracao} por ep </p>
        <p className=' line-clamp-1 place-self-end overflow-hidden col-start-2 row-start-2'>Studio: {StudioName ? StudioName : 'N|A'} </p>
        <p className='place-self-end'>Fonte: {Fonte}</p>

    </div>
    )
}