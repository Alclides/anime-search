export function AnimeImage({Imagem, Title}) {
    return (
        <div className=' sm:row-start-3 col-start-6 col-end-9 row-start-2 row-end-12 mr-2 p-2 rounded-b-3xl overflow-hidden'>
            <img
                src={Imagem}
                alt={Title}
                className="w-full h-full destaque rounded-md"
            /></div>
    )
}