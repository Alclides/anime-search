import { ReactNode } from "react"

type Props =  {
    phase: string
    author?: string
}



export const Card = ({phase, author}: Props) => {
    return(
        <div className="border-2 border-red-600 p-3 text-center w-96">
            <h1 className="text-3xl font-bold italic">{phase}</h1>
            {author &&  
            <h2 className="text-sm text-right"> - {author}</h2>}
        </div>
    )
}