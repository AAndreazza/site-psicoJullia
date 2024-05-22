import React from 'react'
import { Link } from 'gatsby'
import post1 from '../images/post01.webp'
import post2 from '../images/post02.webp'
import post3 from '../images/post03.webp'
import post4 from '../images/post04.webp'

const Instagram = () => {
    return (
        <div className='bg-fundoGeral' id='instagram'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-0 sm:py-14 lg:max-w-7xl lg:px-10'>
        <h2 className='lg:text-2xl text-xl -mt-5 text-center font-normal leading-8 tracking-tight text-[#065f46]'>Instagram</h2>
        <h2 className='text-xl text-center font-light mt-4 leading-8 tracking-tight text-[#065f46]'>Acompanhe meu trabalho nas redes sociais</h2>
            <div className='mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            <div className='group relative'>
                <Link to='https://www.instagram.com/p/C2SX1WQrEMu/?igsh=MWVseW11enN5ZXVwdA==' target='_blank'>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <img src={post1} alt='foto da Jullia de um post do instagram' className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
                    </div>
                </Link>
            </div>

            <div className='group relative'>
                <Link to='https://www.instagram.com/p/C1t-1g9uhIr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <img src={post2} alt='post do instagram' className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
                    </div>
                </Link>
            </div>

            <div className='group relative'>
                <Link to='https://www.instagram.com/p/CxdnL7COEO2/?utm_source=ig_web_copy_link' target='_blank'>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <img src={post3} alt='foto de paisagem de um post do instagram' className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
                    </div>
                </Link>
            </div>

            <div className='group relative'>
                <Link to='https://www.instagram.com/p/C2C3ST3r_OC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80'>
                    <img src={post4} alt='post de instagram' className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
                    </div>
                </Link>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Instagram
