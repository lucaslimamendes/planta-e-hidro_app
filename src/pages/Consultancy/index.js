import '../Consultancy/styles.css'
import React from 'react'
import SideBar from '../../components/SideBar'

const Consultancy = () => {

    return (
        <div className="content-Consultancy">
            <SideBar />
            <div className="content-conteudo">
                <h2>Consultores</h2>
                <div className="content-consultores">
                    <div className="content-imagem">
                        <img src="logo512.png"></img>
                    </div>
                    <div className="content-plantas">
                        <div className="nome-consultor"><p>Nome:</p></div>
                        <div className="formacao"><p>Formação:</p></div>
                    </div>
                    <div className="content-datas">
                        <div className="especializacao"><p>Especialização:</p></div>
                        <div className="dias-disponiveis"><p>Dias disponiveis:</p></div>
                    </div>          
                </div> 
                <div className="box-mensage">
                    <div className="content-mensage">
                        <div className="navbar-box">
                            <div className="consultor">Heitor</div>
                            <div className="buttons">
                                <div className="minimizar">-</div>
                                <div className="fechar">X</div>
                            </div>
                        </div>

                        <div className="menssagem-consultor">
                            <img src="logo512.png"></img>
                            <p>Lorem ipsun</p>
                        </div>

                        <div className="menssagem-solicitante">
                            <p>Lorem ipsun</p>
                            <img src="logo512.png"></img>                        
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Consultancy;
