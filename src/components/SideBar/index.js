import './styles.css'
import Icon from '@mdi/react'
import { mdiAccount, mdiBriefcase, mdiBriefcaseOutline, mdiChartBar, mdiComment, mdiCommentOutline, mdiDotsVertical, mdiExitToApp, mdiLightningBolt, mdiLightningBoltOutline, mdiSprout, mdiViewDashboard } from '@mdi/js'

const SideBar = () => {
    return (

        <div className="SideBar">
            <div className="content-sidebar">

                <div className="Configuracao">
                    <div class="dropdown">
                        <button class="dropbtn"><Icon path={mdiDotsVertical} /></button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>
                <div className="Usuario">
                    <img src="logo512.png"></img>
                    <p>Heitor</p>
                </div>

                <div className="Home">
                    <a href="#"> <Icon path={mdiViewDashboard} /> Home</a>
                </div>

                <div className="Plantacao">
                    <a href="#"> <Icon path={mdiSprout} /> Plantação</a>
                </div>

                <div className="Estoque">
                    <a href="#"> <Icon path={mdiChartBar} /> Estoque</a>
                </div>

                <div className="Sensor">
                    <a href="#"><Icon path={mdiLightningBolt} /> Sensores</a>
                </div>

                <div className="Consultoria">
                    <a href="#"> <Icon path={mdiBriefcase} /> Consultoria</a>
                </div>

                <div className="Mensagens">
                    <a href="#"> <Icon path={mdiComment} /> Mensagens</a>
                </div>

                <div className="Sair">
                    <a href="#"> <Icon path={mdiExitToApp} /> Sair</a>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
