import React from 'react'

const Servicos = () => {
    return (
        <div className='bg-fundoGeral'>
            <div className='mx-auto -mt-4 lg:mt-16 mb-10 max-w-7xl px-6 lg:px-8'>
                
                <h2 className='lg:text-2xl text-xl text-center font-normal leading-8 tracking-tight text-[#065f46]' id='servicos'>Conheça meus serviços</h2>
            
                <div className='mt-12 grid grid-cols-1 gap-y-16 sm:grid-cols-1 lg:grid-cols-2'>
                    <div className='bg-fundoEspecifico+ lg:ml-48 -mb-8 rounded-lg lg:l-12 lg:w-96 mx-auto'>
                        <dt className='mt-5 text-center text-xl font-light text-white'>Terapia para Adultos</dt>
                        <dd className='mx-4 my-5 text-center font-light text-slate-100 px-2'>Atendimento psicológico presencial ou on-line com base na Terapia Cognitivo-Comportamental (TCC) e Neuropsicologia. As sessões ocorrem semanal ou quinzenalmente, com duração de 50 minutos, sendo realizadas no consultório localizado em Blumenau/SC ou por meio de uma plataforma de vídeo chamada.</dd>
                    </div>

                    <div className='bg-fundoEspecifico+ lg:mr-48 -mb-8 rounded-lg lg:l-12 lg:w-96 mx-auto'>
                        <dt className='mt-5 text-center text-xl font-light text-white'>Terapia para Idosos</dt>
                        <dd className='mx-4 my-5 text-center font-light text-slate-100 px-2'>Atendimento psicológico presencial ou on-line com base na Gerontologia. As sessões ocorrem semanal ou quinzenalmente, com duração de 50 minutos, sendo realizadas no consultório localizado em Blumenau/SC ou através de uma plataforma de vídeo chamada.</dd>
                    </div>

                    <div className='bg-fundoEspecifico+ lg:ml-48 -mb-8 lg:mb-8 rounded-lg lg:l-12 lg:w-96 mx-auto'>
                        <dt className='mt-5 text-center text-xl font-light text-white'>Avaliação Psicológica</dt>
                        <dd className='mx-4 my-5 text-center font-light text-slate-100 px-2'>Avaliação psicológica para cirurgia bariátrica; cirurgia para realização de vasectomia; cirurgia para realização de laqueadura ou histerectomia. Acompanhamento psicológico pré e pós-operatório.</dd>
                    </div>

                    <div className='bg-fundoEspecifico+ lg:mr-48 mb-8 rounded-lg lg:l-12 lg:w-96 mx-auto'>
                        <dt className='mt-5 text-center text-xl font-light text-white'>Supervisão para Psicólogos</dt>
                        <dd className='mx-4 my-5 text-center font-light text-slate-100 px-2'>Supervisão presencial ou on-line com foco na Terapia Cognitivo-Comportamental ou Gerontologia. As supervisões têm duração de 50 minutos e podem ser agendadas conforme a necessidade do profissional.</dd>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicos
