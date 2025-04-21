export function AnimeSyno({Sinopse}) {
    return (
        <>
        <div className='col-start-9 col-end-12 row-start-2 row-end-8 grid backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-2 m-1 rounded-3xl z-0 hover:z-20 grid-rows-auto'> 
          <div className='font-bold'>Sinopse:
          </div>
          <div className='overflow-y-auto scrollbar-hide  p-1 no-scrollbar'>
          <p className=" text-sm text-center justify-center p-1   items-center">
            {Sinopse}
          </p>
          </div>

          
        </div>
        
        </>
    )
}