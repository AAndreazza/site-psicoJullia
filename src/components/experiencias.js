import React from 'react'
import { Link } from 'gatsby'
import { CTA_WHATSAPP_MENSAGENS } from '../utils/constants.js'
import { getWhatsUrl } from '../utils/index.js'

const Experiencias = () => {
    return (
        <div className='bg-fundoEspecifico+'>
        <div className='px-6 py-12 sm:px-6 sm:py-12 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
            {/* ANALISAR FONTE */}
            <h2 className='text-3xl font-times tracking-tight text-slate-100 sm:text-2xl'>Psicóloga clínica com experiência em:</h2>
            <p className='mx-auto mt-4 lg:px-0 px-5 max-w-xl font-light text-lg leading-8 text-slate-100 whitespace-pre-wrap'>Ansiedade    Aposentadoria    Autoconhecimento    Burnout    <br/>Compulsão Alimentar    Demências    Depressão    Diagnóstico Diferencial    Fobias    Gestão de Pessoas    Liderança    Luto    Relacionamentos     Transtorno de Ansiedade Generalizada (TAG)   Transtorno Bipolar    Transtorno de Déficit de Atenção e Hiperatividade (TDAH)    <br/>Transtorno de Estresse Pós-Traumático    Transtorno de Pânico</p>
            <div className='mt-8 flex items-center justify-center gap-x-6'>
                <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaGeral)} className='rounded-md bg-[#78dbbf] drop-shadow-2xl px-5 py-3 font-times font-semibold text-black shadow-sm hover:bg-[#b1ffe9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'>
                    Entre em contato
                    <span aria-hidden='true'> &rarr;</span>
                </Link>
            </div>
            </div>
        </div>
        </div>

    )
}

export default Experiencias