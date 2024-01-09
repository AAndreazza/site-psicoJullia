import React from 'react'
import { Link } from 'gatsby'
import fotoTeste from '../images/fotoLadoSorrindo.jpg'

const Instagram = () => {
    return (
        <div className='bg-fundoGeral'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-0 sm:py-14 lg:max-w-7xl lg:px-10'>
        <h2 className='text-xl -mt-5 text-center font-normal leading-8 tracking-tight text-[#065f46]'>Instagram</h2>
        <h2 className='text-xl text-center font-light mt-4 leading-8 tracking-tight text-[#065f46]'>Acompanhe meu trabalho nas redes sociais</h2>
            <div className='mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            <div className='group relative'>
                <Link to=''>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <img src={fotoTeste} alt='cartas espalhadas na mão' className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
                    </div>
                </Link>
            </div>

            <div className='group relative'>
                <Link to=''>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <img src={fotoTeste} alt='braço masculino no bolso da calça com um relógio no punho' className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
                    </div>
                </Link>
            </div>

            <div className='group relative'>
                <Link to=''>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <img src={fotoTeste} alt='duas mulheres com seus computadores rindo' className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
                    </div>
                </Link>
            </div>

            <div className='group relative'>
                <Link to=''>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <img src={fotoTeste} alt='xícara preta com vista para mar azulado e montanhas' className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
                    </div>
                </Link>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Instagram
