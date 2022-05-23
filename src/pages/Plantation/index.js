import '../Plantation/styles.css';
import React, { useContext } from 'react';
import SideBar from '../../components/SideBar';
import { APIAuth } from '../../utils/http-common';
import { AppContext } from '../../context';

const Plantation = () => {
    const { plantations } = useContext(AppContext);

    return (
        <div className="content-Plantation">
            <SideBar />
            <div className="content-conteudo">
                <h2>Plantação</h2>
                { plantations && plantations.length ? plantations.map( (plantation, key) => (
                    <div className="content-plantacao" key={key}>
                        <div className="content-imagem">
                            <img src="logo512.png"></img>
                        </div>
                        <div className="content-plantas">
                            <div className="nome-planta"><p>Planta: {plantation.name}</p></div>
                            <div className="qtd-planta"><p>Qtd Plantado: {plantation.channelQty}</p></div>
                        </div>
                        <div className="content-datas">
                            <div className="dia-plantado"><p>Dia Plantado: {plantation.lastModified}</p></div>
                            <div className="previsao-colheita"><p>Endereço: {plantation.address}</p></div>
                        </div>          
                    </div>
                ) ) : <p>Nenhuma plantação encontrada.</p> }
            </div>
        </div>
    );
};

export default Plantation;
