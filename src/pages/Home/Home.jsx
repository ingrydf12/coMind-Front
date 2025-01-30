<<<<<<< HEAD
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
=======
//import "../../styles/Home.css"
import Banner from "../../components/Banner/Banner";

const Home = () => {
    return (
        <main>
            <Banner />
        </main>
    )
}

export default Home;
>>>>>>> af939747f70a3777558cf6e850e8b16049d00a4d
