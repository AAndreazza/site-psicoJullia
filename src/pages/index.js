import React from "react"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Sobre from "../components/sobre"
import Sobre1 from "../components/sobre1"
import Servicos from "../components/servicos"
import Contato from "../components/contato"
import Depoimentos from "../components/depoimentos"
import Footer from "../components/footer"

const Index = () => {
    return (
        <div className='bg-[#fff9f9]'>
            <Seo title='Psicóloga Jullia' description='incluir descrição...' />
            <Hero />
            <Sobre1 />
            <Servicos />
            <Contato />
            <Depoimentos />
            <Footer />
        </div>
    )
}

export default Index