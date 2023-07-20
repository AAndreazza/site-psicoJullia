import React from 'react'

const Depoimentos = () => {
    return (
        <div className='relative isolate bg-fundoGeral pb-32 pt-24 sm:pt-14'>
        <div className='absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl' aria-hidden='true'>
            <div className='ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#f9fbff] to-[#c99696]'></div>
        </div>
        <div className='absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end' aria-hidden='true'>
            <div className='ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-fundoGeral to-[#c99696] xl:ml-0 xl:mr-[calc(50%-12rem)]'></div>
        </div>
        <div className='mx-auto max-w-7xl px-6 lg:px-8' id='depoimentos'>
            <div className='mx-auto max-w-xl text-center'>
            <h2 className='text-2xl font-semibold leading-8 tracking-tight text-[#b37e6c]' id='depoimentos'>Depoimentos</h2>
            </div>
            <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-14 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4'>
            <figure className='col-span-2 hidden sm:block sm:rounded-2xl sm:bg-fundoGeral sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1'>
                <blockquote className='p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900'>
                <p>“A equipe de marketing demonstrou grande expertise em estratégias de publicidade digital, o que nos ajudou a atingir nosso público-alvo de forma eficaz e gerar um retorno positivo sobre o investimento.”</p>
                </blockquote>
                {/*<figcaption className='flex items-center gap-x-4 border-gray-900/10 px-12 py-4'>
                <div className='flex-auto'>
                    <div className='font-semibold'>- Lucas Mendes</div>
                </div>
                </figcaption>*/}
            </figure>
            <div className='space-y-8 xl:contents xl:space-y-0'>
                <div className='space-y-8 xl:row-span-2'>
                <figure className='rounded-2xl bg-fundoGeral p-6 shadow-lg ring-1 ring-gray-900/5'>
                    <blockquote className='text-gray-900'>
                    </blockquote>
                    <p>“Estamos extremamente satisfeitos com a consultoria de marketing fornecida pela AzzaMarketing. Suas recomendações estratégicas nos permitiram alcançar um crescimento notável em um curto espaço de tempo.”</p>
                    <figcaption className='mt-6 flex items-center gap-x-4'>
                    <div>
                        <div className='font-semibold'>I.S - 24 anos</div>
                    </div>
                    </figcaption>
                </figure>

                <figure className='rounded-2xl bg-fundoGeral p-6 shadow-lg ring-1 ring-gray-900/5'>
                    <blockquote className='text-gray-900'>
                    <p>“Graças aos serviços de marketing da empresa, nossa presença online aumentou significativamente, resultando em um aumento impressionante nas vendas.”</p>
                    </blockquote>
                    <figcaption className='mt-6 flex items-center gap-x-4'>
                    <div>
                        <div className='font-semibold'>G.O - 38 anos</div>
                    </div>
                    </figcaption>
                </figure>

                {/* mais depoimentos */}
                </div>
                <div className='space-y-8 xl:row-start-1'>
                <figure className='rounded-2xl bg-fundoGeral p-6 shadow-lg ring-1 ring-gray-900/5'>
                    <blockquote className='text-gray-900'>
                    <p>“A empresa de marketing superou todas as nossas expectativas! Seus esforços resultaram em um aumento significativo no tráfego do nosso site e na geração de leads qualificados.”</p>
                    </blockquote>
                    <figcaption className='mt-6 flex items-center gap-x-4'>
                    <div>
                        <div className='font-semibold'>L.C - 45 anos</div>
                    </div>
                    </figcaption>
                </figure>

                {/* mais depoimentos */}
                </div>
            </div>
            <div className='space-y-8 xl:contents xl:space-y-0'>
                <div className='space-y-8 xl:row-start-1'>
                <figure className='rounded-2xl bg-fundoGeral p-6 shadow-lg ring-1 ring-gray-900/5'>
                    <blockquote className='text-gray-900'>
                    <p>“A AzzaMarketing foi fundamental na construção da nossa marca. Seu trabalho criativo e abordagem inovadora nos ajudaram a nos destacar no mercado e conquistar a fidelidade dos clientes.”</p>
                    </blockquote>
                    <figcaption className='mt-6 flex items-center gap-x-4'>
                    <div>
                        <div className='font-semibold'>M.A - 48 anos</div>
                    </div>
                    </figcaption>
                </figure>

                {/* mais depoimentos */}
                </div>
                <div className='space-y-8 xl:row-span-2'>
                <figure className='rounded-2xl bg-fundoGeral p-6 shadow-lg ring-1 ring-gray-900/5'>
                    <blockquote className='text-gray-900'>
                    <p>“Gostaríamos de expressar nossa gratidão à equipe de marketing por sua dedicação e empenho. Seu suporte contínuo nos permitiu expandir nossos negócios e nos estabelecer como líderes no setor.”</p>
                    </blockquote>
                    <figcaption className='mt-6 flex items-center gap-x-4'>
                    <div>
                        <div className='font-semibold'>S.R - 61 anos</div>
                    </div>
                    </figcaption>
                </figure>

                <figure className='rounded-2xl bg-fundoGeral p-6 shadow-lg ring-1 ring-gray-900/5'>
                    <blockquote className='text-gray-900'>
                    <p>“Recomendamos fortemente os serviços de marketing dessa empresa. Eles entenderam perfeitamente nossa visão e transformaram nossas ideias em campanhas eficientes, gerando um crescimento notável para nosso negócio.”</p>
                    </blockquote>
                    <figcaption className='mt-6 flex items-center gap-x-4'>
                    <div>
                        <div className='font-semibold'>G.F - 34 anos</div>
                    </div>
                    </figcaption>
                </figure>

                {/* mais depoimentos */}
                </div>
            </div>
            </div>
        </div>
        </div>

    )
}

export default Depoimentos