import React from "react"
import { Link } from "gatsby"
import { CTA_WHATSAPP_MENSAGENS, URLS } from '../utils/constants'
import { getWhatsUrl } from '../utils/index.js'
import Logo from '../images/logoJulliaOficial.png'

const Footer = () => {
    return (
        <footer className='bg-fundoGeral' aria-labelledby='footer-heading'>
        <h2 className='sr-only'>Footer</h2>
        <div className='mx-auto max-w-7xl px-6 pb-8 pt-6 sm:pt-12 lg:px-8 lg:pt-10'>
            <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            <div>
                <Link to='#'>
                <span className='sr-only'>Psicológica Jullia</span>
                <img className='h-20 w-20 rounded-full' src={Logo} alt='logo'/>
                </Link>
                <div className='flex space-x-4 ml-3'>
                <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaGeral)}  className='text-gray-400 hover:text-gray-500'>
                    <span className='sr-only'>Whatsapp</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                </Link>
                <Link to={URLS.instagram} className='text-gray-400 hover:text-gray-500'>
                    <span className='sr-only'>Instagram</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </Link>
                </div>
            </div>
            <div className='mt-4 grid md:grid-cols-2 gap-4 xl:col-span-2 xl:mt-0'>
                <div className='md:grid md:grid-cols-2 md:gap-8'>

                <div className='mt-8 md:mt-0'>
                    <Link to='#sobremim'><h3 className='text-sm font-semibold leading-6 text-gray-900'>Sobre mim</h3></Link>
                </div>
                
                <div>
                    <h3 className='text-sm font-semibold leading-6 text-gray-900 mt-9 sm:mt-9 lg:mt-0'>Serviços</h3>
                    <div role='list' className='mt-6 space-y-4 w-72'>
                    <div>
                        <Link to='#link-whatsapp' className='text-sm font-light leading-6 text-gray-600 hover:text-gray-900'>Terapia para Adultos</Link>
                    </div>
                    <div>
                        <Link to='#link-whatsapp' className='text-sm font-light leading-6 text-gray-600 hover:text-gray-900'>Terapia para Idosos</Link>
                    </div>
                    <div>
                        <Link to='#link-whatsapp' className='text-sm font-light leading-6 text-gray-600 hover:text-gray-900'>Avaliação Psicológica</Link>
                    </div>
                    <div>
                        <Link to='#link-whatsapp' className='text-sm font-light leading-6 text-gray-600 hover:text-gray-900'>Supervisão para Psicólogos</Link>
                    </div>
                    </div>
                </div>
                
                </div>
                
            </div>
            </div>
            <div className='mt-6 border-t border-gray-900/10 pt-4 sm:mt-2 lg:mt-2'>
            <p className='text-xs font-light leading-5 text-gray-500'>&copy; 2024 por Jullia Andreazza</p>
            </div>
        </div>
        </footer>

    )
}

export default Footer