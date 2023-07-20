import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Contato = () => {
    return (
        <div class="overflow-hidden bg-fundoEspecifico+ py-32" id="contato">
        <div class="mx-auto max-w-7xl px-4 lg:flex lg:px-48">
        <div class="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 -my-10 sm:text-left lg:min-w-full lg:max-w-none lg:flex-none">
            <div class="-mt-8 sm:mt-0 lg:col-end-1 lg:w-full lg:max-w-lg">
            <h2 class="text-3xl font-bold tracking-tight text-[#e6d8d4] sm:text-2xl text-center">CONTATOS</h2>
            <dl class="mt-10 space-y-4 text-base leading-7 text-[#e6d8d4]">
            <div class="flex gap-x-4">
                    <dt class="flex-none">
                    <span class="sr-only">Endereco</span>
                    <svg class="h-7 w-6 text-[#d6ab9f]" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                    </dt>
                    <dd>R. Ângelo Dias, 220 - Sala 707 - Centro <br/>Blumenau - SC, 89010-001</dd>
                </div>
                <div class="flex gap-x-4">
                    <dt class="flex-none">
                    <span class="sr-only">Whatsapp</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-[#d6ab9f]"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    </dt>
                    <dd><a class="hover:text-gray-900" href="tel: adicionar">+55 47 98873-5478</a></dd>
                </div>
                <div class="flex gap-x-4">
                    <dt class="flex-none">
                    <span class="sr-only">Email</span>
                    <svg class="h-7 w-6 text-[#d6ab9f]" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    </dt>
                    <dd><a class="hover:text-gray-900" href="mailto:adicionar">julliaandreazza@gmail.com</a></dd>
                </div>
                </dl>
                
            <div class="mt-10 flex justify-center">
                <a 
                    href="#link-whatsapp" 
                    class="rounded-md bg-[#e6d8d4] px-8 py-4 mb-8 text-base font-semibold text-black shadow-sm hover:bg-[#e0bcaf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e0bcaf]"
                >
                    Quero agendar uma consulta   
                    <span aria-hidden="true"> &rarr;</span>
                </a>
            </div>
            </div>
            <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div class="w-full flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
            <div class="mx-auto max-w-[32rem] rounded-2xl bg-fundoEspecifico+ overflow-hidden">
                <StaticImage src="../images/fotomulhercelular.jpg" alt="" class="w-full h-[22rem] rounded-2xl object-cover sm:-mt-4"/>
            </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        


    )
}

export default Contato

{/*<div class="relative isolate bg-black">
        <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div class="mx-auto mt-6 mb-10 max-w-xl lg:mx-0 lg:max-w-lg">
                <h2 class="text-3xl font-bold -pt-0 tracking-tight text-gray-900">Entre em contato</h2>
                <p class="mt-6 text-lg leading-8 text-gray-600">Proin volutpat consequat porttitor cras nullam gravida at.</p>
                <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div class="flex gap-x-4">
                    <dt class="flex-none">
                    <span class="sr-only">Endereco</span>
                    <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                    </dt>
                    <dd>Rua Belo Horizonte - 535<br/>Blumenau, SC</dd>
                </div>
                <div class="flex gap-x-4">
                    <dt class="flex-none">
                    <span class="sr-only">Telefone</span>
                    <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    </dt>
                    <dd><a class="hover:text-gray-900" href="tel: adicionar">+55 47 98873-5478</a></dd>
                </div>
                <div class="flex gap-x-4">
                    <dt class="flex-none">
                    <span class="sr-only">Email</span>
                    <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    </dt>
                    <dd><a class="hover:text-gray-900" href="mailto:adicionar">julliaandreazza@gmail.com</a></dd>
                </div>
                </dl>
            </div>
            
            <div class="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img class="aspect-[4/2] object-cover" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt=""/>
            </div>
        </div>
        </div> */}