import React from "react"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Sobre1 from "../components/sobre"
import Servicos from "../components/servicos"
import Cta from "../components/cta"
import Depoimentos from "../components/depoimentos"
import Contato from "../components/contato"
import Footer from "../components/footer"
import SobreTeste from "../components/sobreTeste"


const Index = () => {
    return (
        <div className='bg-fundoGeral'>
            <Seo title='Psicóloga Jullia' description='incluir descrição...' />
            <Hero />
            <Sobre1/>
            <Servicos />
            <Cta />
            <Depoimentos />
            <Contato />
            <Footer />
        </div>
    )
}

export default Index