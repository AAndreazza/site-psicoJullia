import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { Link } from 'gatsby'

const Hero = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className='bg-[#fff9f9]'>
        <header className='absolute inset-x-0 top-0 z-50 bg-[#fff9f9]'>
            <nav className='flex items-center justify-between p-10 lg:px-8' aria-label='Global'>
            <div className='flex lg:flex-1'>
                <Link to='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Psicóloga Jullia</span>
                {/* Logo: <StaticImage className='h-8 w-auto' src='' alt=''/> */}
                </Link>
            </div>

            {/* Barra lateral - abrir */}
            <div className='flex lg:hidden'>
                <button 
                    type='button' 
                    className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black'
                    onClick={() => setIsSidebarOpen(true)} 
                >
                <span className='sr-only'>Abrir menu</span>
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                </svg>
                </button>
            </div>
            <div className='hidden lg:flex lg:gap-x-14'>
                <Link to='#sobremim' className='text-base font-semibold leading-6 text-gray-900'>Sobre mim</Link>
                <Link to='#servicos' className='text-base font-semibold leading-6 text-gray-900'>Serviços</Link>
                <Link to='#depoimentos' className='text-base font-semibold leading-6 text-gray-900'>Depoimentos</Link>
                <Link to='#contato' className='text-base font-semibold leading-6 text-gray-900'>Contato</Link>
            </div>
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                <Link to='#link-whatsapp' className='text-base font-semibold leading-6 text-gray-900'>Agendar <span aria-hidden='true'>&rarr;</span></Link>
            </div>
            </nav>

            {/* Barra lateral - opções e fechar */}
            <div className={`lg:hidden ${isSidebarOpen ? '' : 'hidden'}`} role='dialog' aria-modal='true'>
                <div className='fixed inset-0 z-50'></div>
                <div className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#fff9f9] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
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
                        <Link to='#sobremim' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Sobre mim</button></Link>
                        <Link to='#servicos' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Serviços</button></Link>
                        <Link to='#depoimentos' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Depoimentos</button></Link>
                        <Link to='#contato' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'><button onClick={() => setIsSidebarOpen(false)}>Contato</button></Link>
                        </div>
                        <div className='py-6'>
                        <Link to='#link-whatsapp' className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Agendar consulta <span aria-hidden='true'>&rarr;</span></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </header>

{ /* Degradê:
        <div className='relative isolate px-6 pt-14 lg:px-8'>
            <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80' aria-hidden='true'>
            <div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#c96572] to-[#e7bbc1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'></div>
            </div>
            
            <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]' aria-hidden='true'>
            <div className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e7bbc1] to-[#c96572] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'></div>
            </div>
        </div>
*/ }
        </div>


    )
}

export default Hero