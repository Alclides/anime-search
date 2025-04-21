export function AnimeAbout({About}) {
    return (
        <>
            {About && (
                <div className='col-start-10 col-end-12 backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 row-start-7 row-end-11 p-2 m-1 rounded-3xl z-10 overflow-y-auto no-scrollbar'>
                    <p className=" text-sm text-center justify-center p-1   items-center">{About}</p>
                </div>
            )}
        </>


    )
}