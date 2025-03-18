import React from 'react'
import "./DoctorProfile.css";
import ImageTest from "../../../assets/image_profile.png"
import Button from 'react-bootstrap/Button';
import FormIndicacoes from "../../../components/FormIndicacoes/FormIndicacoes"

const DoctorProfile = () => {
    return (
        <div className="info-profile">

            <div className="basic-info">
                <img className='img-style'
                    src={ImageTest}
                    alt="Doctor Image"
                    />

                <div className='about-user'>
                    <h1>Dr. House</h1>
                    <h2 className='crp-style'>Matricula Profissional: 1234567</h2> {/*Stephany: aqui ficaria concatenado com a numeração do CRP do usuario que está armazenada no banco de dados */}
                    <h3>Sobre: </h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut explicabo eveniet similique, unde vitae doloribus deleniti tempora perferendis asperiores hic alias quidem maxime saepe nostrum debitis? Quam quo modi perferendis.</p>
                </div>
            </div>

            <div className="indications-container">
                <p>indica:</p>
                <h2>Abraço Coletivo</h2>
                <div className="more-info">
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                    <Button className='btn-style'><a href="../indications">Saiba mais</a></Button>
                </div>
            </div>

            <hr className='line-style' />

            <div className="specific-info">

                <div className="main-info">

                    <div className="atendimentos-container">
                        <div>
                            <h3>Atendimento a:</h3>
                        </div>
                        <ul>
                            <li>Adultos</li>
                            <li>Crianças</li>
                            <li>Idosos</li>
                        </ul>
                    </div>

                    <div className="region-speciality-cont">
                        <div className="region-container">
                            <h3>Região</h3>
                            <ul>
                                <li>Taiba/Pecém</li>
                            </ul>
                        </div>

                        <div className="specialty-container">
                            <h3>Especialidade</h3>
                            <ul>
                                <li>Ansiedade</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <aside>
                    <div className="disponibility-container">

                        <div>
                            <h3>Disponibilidade</h3>
                        </div>

                        <div className='days-hours-disponibility'>
                            <div className="days-hours-item">
                                <p>Dias disponíveis</p>
                                <ul>
                                    <li>seg-sáb</li>
                                </ul>
                            </div>
                            <div className="days-hours-item">
                                <p>Horários</p>
                                <ul>
                                    <li>08:00 - 12:00</li>
                                    <li>15:00 - 19:00</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </aside>
            </div>
            <FormIndicacoes />
        </div>
    )
}

export default DoctorProfile;