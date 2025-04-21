import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export function AnimeSocial () {
    return(
        <div className='col-start-9 col-end-12 backdrop-filter grid grid-cols-4 backdrop-blur-sm bg-opacity-10 border border-gray-100 p-1 m-1 rounded-3xl'>
            <a href="https://github.com/Alclides" rel="noopener noreferrer" target='_blank' className='col-start-1 place-self-center' > <FaGithub className='hover:animate-bounce' /></a>
            <a href="https://x.com/Alclides_" rel="noopener noreferrer" target='_blank' className='col-start-2 place-self-center '><FaXTwitter className='hover:animate-bounce' /></a>
            <a href="https://www.instagram.com/alclidess/" rel="noopener noreferrer" target='_blank' className='col-start-3 place-self-center'><FaInstagram className='hover:animate-bounce' /> </a>
            <a href="https://www.linkedin.com/in/alclides-oliveira-b4623a1a3/" rel="noopener noreferrer" target='_blank' className='col-start-4 place-self-center'><FaLinkedin className='hover:animate-bounce' /></a>
        </div>
    )
}