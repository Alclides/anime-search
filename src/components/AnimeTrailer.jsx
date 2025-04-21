import { FaYoutube } from "react-icons/fa";

export function AnimeTrailer ({link, id}) {
    return (
        <>
        {id && (
        <div className='col-start-1 flex text-red-200 col-end-5 row-start-1 contrast-150 italic text-4xl hover:underline'>
          <a href={`https://www.youtube.com/watch?v=${link}`} rel="noopener noreferrer" target='_blank' className='italic flex-nowrap' >Assista ao Trailer <FaYoutube className='text-red-500'/>
          </a>
          </div>)}
        </>
    )
}