import React from "react"
import Footer from "../components/footer"
import Seo from "../components/seo"
import Sobre from "../components/sobre"
import Sobre1 from "../components/sobre1"



const Index = () => {
    return (
        <div>
            <Seo title='Psicóloga Jullia' description='incluir descrição...' />
            <Sobre />
            <Sobre1 />

            <Footer />
        </div>
    )
}

export default Index