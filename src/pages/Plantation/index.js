import '../Plantation/styles.css'
import React from 'react'
import SideBar from '../../components/SideBar'

const Plantation = () => {

    return (
        <div className="content-Plantation">
            <SideBar />
            <div className="content-conteudo">
                <h2>Plantação</h2>
                <div className="content-plantacao">
                    <div className="content-imagem">
                        <img src="logo512.png"></img>
                    </div>
                    <div className="content-plantas">
                        <div className="nome-planta"><p>Planta:</p></div>
                        <div className="qtd-planta"><p>Qtd Plantado:</p></div>
                    </div>
                    <div className="content-datas">
                        <div className="dia-plantado"><p>Dia Plantado:</p></div>
                        <div className="previsao-colheita"><p>Previsão de Colheita:</p></div>
                    </div>          
                </div> 
                <div className="content-plantacao">
                    <div className="content-imagem">
                        <img src="logo512.png"></img>
                    </div>
                    <div className="content-plantas">
                        <div className="nome-planta"><p>Planta:</p></div>
                        <div className="qtd-planta"><p>Qtd Plantado:</p></div>
                    </div>
                    <div className="content-datas">
                        <div className="dia-plantado"><p>Dia Plantado:</p></div>
                        <div className="previsao-colheita"><p>Previsão de Colheita:</p></div>
                    </div>          
                </div>        
                <div className="content-plantacao">
                    <div className="content-imagem">
                        <img src="logo512.png"></img>
                    </div>
                    <div className="content-plantas">
                        <div className="nome-planta"><p>Planta:</p></div>
                        <div className="qtd-planta"><p>Qtd Plantado:</p></div>
                    </div>
                    <div className="content-datas">
                        <div className="dia-plantado"><p>Dia Plantado:</p></div>
                        <div className="previsao-colheita"><p>Previsão de Colheita:</p></div>
                    </div>          
                </div>        
                <div className="content-plantacao">
                    <div className="content-imagem">
                        <img src="logo512.png"></img>
                    </div>
                    <div className="content-plantas">
                        <div className="nome-planta"><p>Planta:</p></div>
                        <div className="qtd-planta"><p>Qtd Plantado:</p></div>
                    </div>
                    <div className="content-datas">
                        <div className="dia-plantado"><p>Dia Plantado:</p></div>
                        <div className="previsao-colheita"><p>Previsão de Colheita:</p></div>
                    </div>          
                </div>                           
            </div>
        </div>
    );
};

export default Plantation;
