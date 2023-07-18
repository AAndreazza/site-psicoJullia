import React from "react"
import Seo from "../components/seo"
import Sobre from "../components/sobre"
import Sobre1 from "../components/sobre1"
import Hero from "../components/hero"
import Servicos from "../components/servicos"



const Index = () => {
    return (
        <div className='bg-[#fff9f9]'>
            <Seo title='Psicóloga Jullia' description='incluir descrição...' />
            <Hero />
            <Sobre1 />
            <Sobre />
            <Servicos />
        </div>
    )
}

export default Index