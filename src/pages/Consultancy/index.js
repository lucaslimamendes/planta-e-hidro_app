import '../Consultancy/styles.css'
import React from 'react'
import SideBar from '../../components/SideBar'

const Stock = () => {

    return (
        <div className="content-Sensor">
            <SideBar />
            <div className="content-conteudo">
                <h2>Consultores</h2>
                <div className="sensor-temperatura">
                    <div className="content-temperatura">
                        <h3>Temperatura</h3>
                        <div className="status-temperatura">
                            <div className="status-sensor"></div>
                            <p>ONLINE</p>
                        </div>
                        <div className="content-valores">
                            <div className="valor-min">
                                <p>20ºC</p>
                                <h4>Valor MIN</h4>                                
                            </div>
                            <div className="valor-atual">
                                <p>24ºC</p>
                                <h4>Valor ATUAL</h4>                                
                            </div>
                            <div className="valor-max">
                                <p>26ºC</p>
                                <h4>Valor MAX</h4>       
                            </div>
                        </div>
                    </div>
                </div>                            

            </div>

        </div>


    );
};

export default Stock;
