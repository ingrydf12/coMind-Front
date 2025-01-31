import { Outlet } from "react-router-dom"
import Banner from "../../components/Banner/Banner"
import Sobre from "../../components/Sobre/Sobre"
import Indicacoes from "../../components/Indicacoes/Indicacoes"
import Depoimentos from "../../components/Depoimentos/Depoimentos"

const Home = () => {
    return (
        <>
            <Banner />
            <Sobre />
            <Indicacoes />
            <Depoimentos />
        </>
    )
}

export default Home ;
