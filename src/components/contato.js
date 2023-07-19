import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Contato = () => {
    return (
        <div class="overflow-hidden bg-[#b37e6c] py-32">
        <div class="mx-auto max-w-7xl px-4 lg:flex lg:px-48">
        <div class="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 -my-10 sm:text-left lg:min-w-full lg:max-w-none lg:flex-none">
            <div class="lg:col-end-1 lg:w-full lg:max-w-lg">
            <h2 class="text-3xl font-bold tracking-tight text-[#e6d8d4] sm:text-2xl font-serif text-center">CONTATOS</h2>
            <dl class="mt-10 space-y-4 text-base leading-7 text-[#e6d8d4]">
            <div class="flex gap-x-4">
                    <dt class="flex-none">
                    <span class="sr-only">Endereco</span>
                    <svg class="h-7 w-6 text-[#d6ab9f]" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                    </dt>
                    <dd>Rua Belo Horizonte - 535<br/>Blumenau, SC</dd>
                </div>
                <div class="flex gap-x-4">
                    <dt class="flex-none">
                    <span class="sr-only">Telefone</span>
                    <svg class="h-7 w-6 text-[#d6ab9f]" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
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
                
            <div class="mt-10 flex">
                <a 
                    href="#link-whatsapp" 
                    class="rounded-md bg-[#e6d8d4] px-3.5 py-2.5 mb-8 text-sm font-semibold text-black shadow-sm hover:bg-[#e0bcaf focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e0bcaf]"
                >
                    Quero agendar uma consulta   
                    <span aria-hidden="true"> &rarr;</span>
                </a>
            </div>
            </div>
            <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <StaticImage src="../images/fotomulhercelular.jpg" alt="" class="aspect-[7/5] w-[32rem] max-w-none rounded-2xl bg-gray-50 object-cover sm:-mt-4"/>
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