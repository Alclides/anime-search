const getWeekDay = (hoje: Date) => {
    return Intl.DateTimeFormat('pt-Br' , {weekday: 'long'}).format(hoje);
}

const hoje = new Date()

type Props = {
    name: string,
    avatar?: string,
    roles: string[]
}

export const Person = ({name, avatar = 'https://s2-g1.glbimg.com/pm5ud3T8O8u87VMngvF8Uz_BrN8=/0x0:1200x674/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/G/B/hX4UJ9TwaPRAlAvGXTdA/herobrine.jpg', roles}: Props) => {
    

    return (
        <>
        <h1>{name} + {getWeekDay(hoje).toUpperCase()} + Cargos: {roles[0]} e {roles[1]}</h1>
        <img className="w-50 h-30" src={avatar} alt={name} />

        </>
    )
}