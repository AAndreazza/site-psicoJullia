import React from 'react'

const Servicos = () => {
    return (
        <div className='bg-fundoGeral'>
            <div className='mx-auto mt-0 lg:mt-24 mb-10 max-w-7xl px-6 lg:px-8'>
                
                <h2 className='text-2xl text-center font-semibold leading-8 tracking-tight text-[#b37e6c]' id='servicos'>Conheça meus serviços</h2>
            
                <div className='mt-12 grid grid-cols-1 gap-y-16 sm:grid-cols-1 lg:grid-cols-2'>
                    <div className='bg-fundoEspecifico+ lg:ml-48 -mb-8 rounded-lg lg:l-12 lg:w-96 mx-auto'>
                        <dt className='mt-5 text-center text-lg font-semibold text-white'>Terapia Presencial e Online</dt>
                        <dd className='mx-4 my-5 text-center font-light text-slate-100'>Atendimento psicológico on-line para adultos com base na Terapia Cognitivo-Comportamental (TCC) ou Terapia Comportamental Dialética (DBT). Os atendimentos são semanais ou quinzenais, têm a duração de 50 minutos e são realizados através de uma plataforma de vídeo chamada.</dd>
                    </div>

                    <div className='bg-fundoEspecifico+ lg:mr-48 -mb-8 rounded-lg lg:l-12 lg:w-96 mx-auto'>
                        <dt className='mt-5 text-center text-lg font-semibold text-white'>Avaliação Psicológica</dt>
                        <dd className='mx-4 my-5 text-center font-light text-slate-100'>Atendimento psicológico on-line para adultos com base na Terapia Cognitivo-Comportamental (TCC) ou Terapia Comportamental Dialética (DBT). Os atendimentos são semanais ou quinzenais, têm a duração de 50 minutos e são realizados através de uma plataforma de vídeo chamada.</dd>
                    </div>

                    <div className='bg-fundoEspecifico+ lg:ml-48 -mb-8 lg:mb-8 rounded-lg lg:l-12 lg:w-96 mx-auto'>
                        <dt className='mt-5 text-center text-lg font-semibold text-white'>Avaliação Neuropsicológica</dt>
                        <dd className='mx-4 my-5 text-center font-light text-slate-100'>Atendimento psicológico on-line para adultos com base na Terapia Cognitivo-Comportamental (TCC) ou Terapia Comportamental Dialética (DBT). Os atendimentos são semanais ou quinzenais, têm a duração de 50 minutos e são realizados através de uma plataforma de vídeo chamada.</dd>
                    </div>

                    <div className='bg-fundoEspecifico+ lg:mr-48 mb-8 rounded-lg lg:l-12 lg:w-96 mx-auto'>
                        <dt className='mt-5 text-center text-lg font-semibold text-white'>Reabilitação Neuropsicológica</dt>
                        <dd className='mx-4 my-5 text-center font-light text-slate-100'>Atendimento psicológico on-line para adultos com base na Terapia Cognitivo-Comportamental (TCC) ou Terapia Comportamental Dialética (DBT). Os atendimentos são semanais ou quinzenais, têm a duração de 50 minutos e são realizados através de uma plataforma de vídeo chamada.</dd>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicos
