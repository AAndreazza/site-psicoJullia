import React from "react"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Sobre1 from "../components/sobre"
import Servicos from "../components/servicos"
import Experiencias from "../components/experiencias"
import Instagram from "../components/instagram"
import Contato from "../components/contato"
import Footer from "../components/footer"

const Index = () => {
    return (
        <div className='bg-fundoGeral'>
            <Seo title='Psicóloga Jullia' description='incluir descrição...' />
            <Hero />
            <Sobre1/>
            <Servicos />
            <Experiencias />
            <Instagram />
            <Contato />
            <Footer />
        </div>
    )
}

export default Index