export const Horas = () => {

     return (
        new Intl.DateTimeFormat('pt-BR', {timeStyle: 'short',
        hour12: false
        }).format())
}