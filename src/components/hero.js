import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Hero = () => {
    return (
        <div className='bg-[#fff9f9]'>
        <header className='absolute inset-x-0 top-0 z-50 bg-[#fff9f9]'>
            <nav className='flex items-center justify-between p-10 lg:px-8' aria-label='Global'>
            <div className='flex lg:flex-1'>
                <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Psicóloga Jullia</span>
                <StaticImage className='h-8 w-auto' src='' alt=''/>
                </a>
            </div>
            <div className='flex lg:hidden'>
                <button type='button' className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100'>
                <span className='sr-only'>Abrir menu</span>
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                </svg>
                </button>
            </div>
            <div className='hidden lg:flex lg:gap-x-14'>
                <a href='#' className='text-base font-semibold leading-6 text-gray-900'>Sobre mim</a>
                <a href='#' className='text-base font-semibold leading-6 text-gray-900'>Serviços</a>
                <a href='#' className='text-base font-semibold leading-6 text-gray-900'>Depoimentos</a>
                <a href='#' className='text-base font-semibold leading-6 text-gray-900'>Contato</a>
            </div>
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                <a href='#' className='text-base font-semibold leading-6 text-gray-900'>Agendar <span aria-hidden='true'>&rarr;</span></a>
            </div>
            </nav>
            {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
            <div className='lg:hidden' role='dialog' aria-modal='true'>
            {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
            <div className='fixed inset-0 z-50'></div>
            <div className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                <div className='flex items-center justify-between'>
                <a href='#' className='-m-1.5 p-1.5'>
                    <span className='sr-only'>Psicóloga Jullia</span>
                    <img className='h-8 w-auto' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' alt=''/>
                </a>
                <button type='button' className='-m-2.5 rounded-md p-2.5 text-gray-700'>
                    <span className='sr-only'>Fechar menu</span>
                    <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                </button>
                </div>
                <div className='mt-6 flow-root'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                    <div className='space-y-2 py-6'>
                    <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Sobre mim</a>
                    <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Serviços</a>
                    <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Depoimentos</a>
                    <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Contato</a>
                    </div>
                    <div className='py-6'>
                    <a href='#' className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Agendar</a>
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