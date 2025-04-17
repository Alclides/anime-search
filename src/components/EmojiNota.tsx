type Props = {
    nota: number;
}


export const EmojiNota = ({nota}: Props) => {
    if (nota <= 0 )
            {nota = 0 };
     if (nota > 5 )
            { nota = 5}

    const emojij = Math.floor(nota)

    const emoji = '★'.repeat(emojij) + '☆'.repeat(5 - emojij)
    
    

    return(

    <div className=" text-5xl flex w-screen h-screen justify-center items-center">
        <div className="m-1.5 ">{nota} </div>
        <div className="m-1.5">{emoji} </div>
    </div>
)}