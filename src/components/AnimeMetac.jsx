export function AnimeMetac({Score, Rank, Members, Popularity, McURL}) {
    return (

        <div className='order-6 col-start-1 row-start-3 xl:row-end-8 p-1b  grid xl:grid-cols-3 m-1 rounded-3xl backdrop-filter backdrop-blur-md grid-rows-7 bg-opacity-10 border border-gray-100'>
            <p className=' lg:text-white col-start-2'>MC</p>
            <p className='place-self-center lg:text-white col-start-2 row-start-2'> {Score}
            </p>

            <div className='col-start-1 lg:text-amber-50 row-start-2 place-self-center-safe animate-spin'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg> </div>

            <div className='row-start-3 lg:text-amber-50 place-self-center animate-bounce'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
            </svg>
            </div>

            <div className='col-start-2 lg:text-amber-50 row-start-3 place-self-center'> {Rank}</div>

            <div className='col-start-1 lg:text-amber-50 row-start-4 place-self-center'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:fill-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            </div>

            <div className='col-start-2 text-amber-50 row-start-4 col-end-4 place-self-center'> {Members}</div>

            <div className='col-start-1 lg:text-amber-50 row-start-5 place-self-center'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0  0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
            </svg>
            </div>

            <div className='col-start-2 col-end-3 lg:text-amber-50 row-start-5 place-self-center'>{Popularity}  </div>


            <a href={McURL} rel="noopener noreferrer" target='_blank' className='col-start-1 col-end-4 row-start-6 row-end-8 place-self-center'><div className='bg-blue-400 border rounded-xl p-1'>MetaCritic </div></a>


        </div>
    )

}