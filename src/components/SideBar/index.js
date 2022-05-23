import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../../context';
import './styles.css'
import Icon from '@mdi/react'
import { mdiBriefcase, mdiChartBar, mdiComment, mdiDotsVertical, mdiExitToApp, mdiLightningBolt, mdiSprout, mdiViewDashboard } from '@mdi/js'

const SideBar = () => {
    const navigate = useNavigate();
    const { logged, dispatchEvent } = useContext(AppContext);

    const logOut = async () => {
        await dispatchEvent('SET_LOGGED', { logged: false });
        await dispatchEvent('SET_USER', { user: {} });
        localStorage.setItem('token', '');
        navigate('/login');
    }

    return (
        <div className="SideBar">
            <div className="content-sidebar">
                <div className="content-Configuracao">
                    <div className="Configuracao">
                        <div className="dropdown">
                            <button className="dropbtn"><Icon path={mdiDotsVertical} /></button>
                            {/* <div className="dropdown-content">
                                <a href="javascript:void(0)">Link 1</a>
                                <a href="javascript:void(0)">Link 2</a>
                                <a href="javascript:void(0)">Link 3</a>
                            </div> */}
                        </div>
                    </div>
                </div>
                
                <div className="content-Usuario">
                    <div className="Usuario">
                        <img src="logo512.png"></img>
                        <p>Planta&Hidro</p>
                    </div>
                </div>

                { logged ? (
                    <div className="content-buttons">
                        <div className="Home">
                            <a onClick={() => navigate('/')}> <Icon path={mdiViewDashboard} /> Home</a>
                        </div>

                        <div className="Plantacao">
                            <a onClick={() => navigate('/plantation')}> <Icon path={mdiSprout} /> Plantação</a>
                        </div>

                        <div className="Estoque">
                            <a onClick={() => navigate('/stock')}> <Icon path={mdiChartBar} /> Estoque</a>
                        </div>

                        <div className="Sensor">
                            <a onClick={() => navigate('/sensor')}><Icon path={mdiLightningBolt} /> Sensores</a>
                        </div>

                        <div className="Consultoria">
                            <a onClick={() => navigate('/consultancy')}> <Icon path={mdiBriefcase} /> Consultoria</a>
                        </div>
                    </div>
                ) : (
                    <div className="content-buttons">
                        <div className="Home">
                            <a onClick={() => navigate('/login')}> <Icon path={mdiViewDashboard} /> Login</a>
                        </div>
    
                        <div className="Cadastro">
                            <a onClick={() => navigate('/register')}> <Icon path={mdiSprout} /> Cadastro</a>
                        </div>
                    </div>
                )}

                { logged && (
                    <div className="content-Mensagens">
                        <div className="Mensagens">
                            <a href="javascript:void(0)"> <Icon path={mdiComment} /> Mensagens</a>
                        </div>
                    </div>
                ) }
                { logged && (
                    <div className="content-Sair">
                        <div className="Sair">
                            <a href="" onClick={() => logOut()}> <Icon path={mdiExitToApp} /> Sair</a>
                        </div>
                    </div>
                ) }
            </div>
        </div>
    );
};

export default SideBar;
