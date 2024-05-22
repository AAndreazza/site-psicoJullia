import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Link as ScrollLink } from "react-scroll";
import { CTA_WHATSAPP_MENSAGENS } from '../utils/constants'
import { getWhatsUrl } from '../utils/index.js'
import Logo from '../images/logoSemFundo.webp'

const Hero = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className='bg-fundoGeral' id='inicio'>
        <header className='absolute inset-x-0 top-0 z-50 bg-fundoGeral'>
            <nav className='flex items-center justify-between p-5 lg:px-8' aria-label='Global'>
            <div className='flex lg:flex-1'>
                <Link to='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Psicóloga Jullia</span>
                <img className='h-24 w-24 lg:h-20 lg:w-20 rounded-full' src={Logo} alt='Logo'/> 
                </Link> 
            </div>

            {/* Barra lateral - abrir */}
            <div className='flex lg:hidden'>
                <button 
                    type='button' 
                    className='-m-1.5 inline-flex items-center justify-center rounded-md p-2.5 text-black'
                    onClick={() => setIsSidebarOpen(true)} 
                >
                <span className='sr-only'>Abrir menu</span>
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                </svg>
                </button>
            </div>
            <div className='hidden lg:flex lg:gap-x-14'>
                <ScrollLink to='sobremim' spy={true} smooth={true} className='cursor-pointer text-xl font-normal leading-6 text-[#065f46]'>Sobre mim</ScrollLink >
                <ScrollLink to='servicos' spy={true} smooth={true} className='cursor-pointer text-xl font-normal leading-6 text-[#065f46]'>Serviços</ScrollLink >
                <ScrollLink to='instagram' spy={true} smooth={true} className='cursor-pointer text-xl font-normal leading-6 text-[#065f46]'>Instagram</ScrollLink >
                <ScrollLink to='contato' spy={true} smooth={true} className='cursor-pointer text-xl font-normal leading-6 text-[#065f46]'>Contato</ScrollLink >
            </div>
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaGeral)} className='text-xl font-normal leading-6 text-[#065f46]'>Agendar <span aria-hidden='true'>&rarr;</span></Link>
            </div>
            </nav>

            {/* Barra lateral - opções e fechar */}
            <div className={`lg:hidden ${isSidebarOpen ? '' : 'hidden'}`} role='dialog' aria-modal='true'>
                <div className='fixed inset-0 z-50'></div>
                <div className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-fundoGeral px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                    <div className='flex items-center justify-between'>
                    {/* LOGO:  <Link to='/' className='-m-1.5 p-1.5'>
                        <button onClick={() => setIsSidebarOpen(false)}>
                        <span className='sr-only'>Psicóloga Jullia</span>
                        <StaticImage className='h-8 w-auto' src='' alt=''/>
                        </button>
                    </Link>*/}
                    <button 
                        type='button' 
                        className='-m-2.5 rounded-md p-2.5 text-gray-700'
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <span className='sr-only'>Fechar menu</span>
                        <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    </button>
                    </div>
                    <div className='mt-6 flow-root'>
                    <div className='-my-6 divide-y divide-gray-500/10'>
                        <div className='space-y-2 py-6'>
                        <ScrollLink to='sobremim' spy={true} smooth={true} className='cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-xl font-light leading-7 text-[#065f46] hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Sobre mim</button></ScrollLink>
                        <ScrollLink to='servicos' spy={true} smooth={true} className='cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-xl font-light leading-7 text-[#065f46] hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Serviços</button></ScrollLink>
                        <ScrollLink to='instagram' spy={true} smooth={true} className='cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-xl font-light leading-7 text-[#065f46] hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Instagram</button></ScrollLink>
                        <ScrollLink to='contato' spy={true} smooth={true} className='cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-xl font-light leading-7 text-[#065f46] hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Contato</button></ScrollLink>
                        </div>
                        <div className='py-6'>
                        <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaGeral)} className='-mx-3 block rounded-lg px-3 py-2.5 text-xl font-light leading-7 text-[#065f46] hover:bg-gray-50'>Agendar<span aria-hidden='true'> &rarr;</span></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </header>
        </div>
    )
}

export default Hero