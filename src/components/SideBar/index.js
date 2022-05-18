import './styles.css'
import Icon from '@mdi/react'
import { mdiBriefcase, mdiChartBar, mdiComment, mdiCommentOutline, mdiDotsVertical, mdiExitToApp, mdiLightningBolt, mdiSprout, mdiViewDashboard } from '@mdi/js'

const SideBar = () => {
    return (

        <div className="SideBar">
            <div className="content-sidebar">
                <div className="content-Configuracao">
                    <div className="Configuracao">
                        <div class="dropdown">
                            <button class="dropbtn"><Icon path={mdiDotsVertical} /></button>
                            <div class="dropdown-content">
                                <a href="javascript:void(0)">Link 1</a>
                                <a href="javascript:void(0)">Link 2</a>
                                <a href="javascript:void(0)">Link 3</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-Usuario">
                    <div className="Usuario">
                        <img src="logo512.png"></img>
                        <p>Heitor</p>
                    </div>
                </div>

                <div className="content-buttons">
                    <div className="Home">
                        <a href="/"> <Icon path={mdiViewDashboard} /> Home</a>
                    </div>

                    <div className="Plantacao">
                        <a href="javascript:void(0)"> <Icon path={mdiSprout} /> Plantação</a>
                    </div>

                    <div className="Estoque">
                        <a href="javascript:void(0)"> <Icon path={mdiChartBar} /> Estoque</a>
                    </div>

                    <div className="Sensor">
                        <a href="/sensor"><Icon path={mdiLightningBolt} /> Sensores</a>
                    </div>

                    <div className="Consultoria">
                        <a href="javascript:void(0)"> <Icon path={mdiBriefcase} /> Consultoria</a>
                    </div>
                </div>

                <div className="content-Mensagens">
                    <div className="Mensagens">
                        <a href="javascript:void(0)"> <Icon path={mdiComment} /> Mensagens</a>
                    </div>
                </div>

                <div className="content-Sair">
                    <div className="Sair">
                        <a href="javascript:void(0)"> <Icon path={mdiExitToApp} /> Sair</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
