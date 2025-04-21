export function AnimeDate({Dia, Mes, Ano}) {
    return (
        <div className='col-start-1 col-end-3 row-start-8 rounded-3xl row-end-11 p-2 m-1 backdrop-filter backdrop-blur-sm bg-opacity-10 border grid border-gray-100'>
            <p className='text-white place-self-center'> Lançamento: </p>
            <div className='col-start-1 gap-1 items-center justify-center flex bg-transparent w-full h-full rounded-full'>
                <p className='text-white text-5xl'>{Dia}. </p>
                <p className='text-white col-start-2'>{Mes}. </p>
                <p className='text-white'>{Ano}</p>
            </div>

        </div>
    )
}