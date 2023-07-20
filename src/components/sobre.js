import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Link } from 'gatsby'

const Sobre = () => {
    return (
        <div className='bg-fundoGeral'> 
        <div className='relative bg-fundoEspecifico- mx-56 mt-20 mb-4 rounded-lg'>
        <div className='relative h-80 overflow-hidden rounded-lg md:absolute md:right-0 md:h-full md:w-1/3 lg:w-1/2'>
            <StaticImage className='h-full w-full object-cover rounded-lg' src='../images/fotomulhercelular.jpg' alt=''/>
        </div>
        <div className='relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-36'>
            <div className='pl-0 pr-0 md:mr-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-0 lg:pr-0 xl:pl-8'>
            <h2 className='-mt-20 text-base font-serif leading-7 text-stone-100'>SOBRE MIM</h2>
            <p className='mt-2 text-lg font-serif font-semibold tracking-tight text-[#c96572] sm:text-xl'>Jullia Andreazza - CRP-xx/xxxxx</p>
            {/* <p className='mt-6 text-base font-semibold leading-7 text-neutral-900 mr-20'>Sou uma psicóloga apaixonada pelo meu trabalho! Com base na minha experiência e conhecimento, estou comprometida em oferecer apoio terapêutico individualizado e abrangente, ajudando meus clientes a superar desafios emocionais, cognitivos e comportamentais. Através de uma abordagem empática e baseada em evidências, estou aqui para auxiliá-lo em seu processo de crescimento, cura e desenvolvimento pessoal.</p> */}
            <blockquote className='mt-6 text-lg leading-7 font-serif text-stone-100 mr-20'>
                <p>Sou uma psicóloga apaixonada pelo meu trabalho! Com base na minha experiência e conhecimento, estou comprometida em oferecer apoio terapêutico individualizado e abrangente, ajudando meus clientes a superar desafios emocionais, cognitivos e comportamentais. Através de uma abordagem empática e baseada em evidências, estou aqui para auxiliá-lo em seu processo de crescimento, cura e desenvolvimento pessoal.</p>
            </blockquote>
            <div className='mt-8'>
                <Link to='#' className='inline-flex rounded-md bg-[#c96572] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#aa757c96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>Saiba mais</Link>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Sobre