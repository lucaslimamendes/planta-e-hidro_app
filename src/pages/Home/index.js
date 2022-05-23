import '../Home/styles.css'
import React, { useContext } from 'react';
import SideBar from '../../components/SideBar';
import { AppContext } from '../../context';

const Home = () => {
    const { plantations } = useContext(AppContext);

    return (
        <div className="content-home">
            <SideBar />
            <div className="content-conteudo">
                <div className="content-pages">
                    <div className="content-noticia">
                        <p>Noticia</p>
                    </div>
                    <div className="content-plantacao">
                       <table>
                        <tr>
                                <th>Nome</th>
                                <th>Quantidade</th>
                                <th>Endereço</th>
                            </tr>
                            { plantations && plantations[0] && (
                                <tr>
                                    <td>{ plantations[0].name }</td>
                                    <td>{ plantations[0].channelQty }</td>
                                    <td>{ plantations[0].address }</td>
                                </tr>
                            ) }
                       </table>

                    </div>
                </div>
                <div className="content-pages-1">
                    <div className="content-clima">
                        <p>Clima</p>
                    </div>
                    <div className="content-bolsa">
                        <p><img src="Ellipse-13.png"></img> Dol</p>
                        <p><img src="Ellipse-14.png"></img> Eur</p>
                        <p><img src="Ellipse-15.png"></img> Brl</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
