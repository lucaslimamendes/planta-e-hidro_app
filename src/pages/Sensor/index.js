import './styles.css'
import React from 'react'
import SideBar from '../../components/SideBar'

const Sensor = () => {

    return (
        <div className="content-Sensor">
            <SideBar />
            <div className="content-conteudo">
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

                <div className="sensor-luminosidade">
                    <div className="content-luminosidade">
                        <h3>Luminosidade</h3>
                        <div className="status-luminosidade">
                            <div className="status-sensor"></div>
                            <p>OFFLINE</p>
                        </div>
                        <div className="content-valores">
                            <div className="valor-min">
                                <p>20 lux</p>
                                <h4>Valor MIN</h4>                                
                            </div>
                            <div className="valor-atual">
                                <p>20 lux</p>
                                <h4>Valor ATUAL</h4>                                
                            </div>
                            <div className="valor-max">
                                <p>20 lux</p>
                                <h4>Valor MAX</h4>       
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sensor-umidade">
                    <div className="content-umidade">
                        <h3>Umidade</h3>
                        <div className="status-umidade">
                            <div className="status-sensor"></div>
                            <p>ONLINE</p>
                        </div>
                        <div className="content-valores">
                            <div className="valor-min">
                                <p>20%</p>
                                <h4>Valor MIN</h4>                                
                            </div>
                            <div className="valor-atual">
                                <p>20%</p>
                                <h4>Valor ATUAL</h4>                                
                            </div>
                            <div className="valor-max">
                                <p>20%</p>
                                <h4>Valor MAX</h4>       
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    );
};

export default Sensor;
