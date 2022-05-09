import './styles.css'
import React, { Component } from 'react'
import SideBar from '../../components/SideBar'

const Home = () => {

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
                                <th>Tempo de cultivo</th>
                            </tr>
                            <tr>
                                <td>Alface</td>
                                <td>10</td>
                                <td>10 dias</td>
                            </tr>
                            <tr>
                                <td>Rucula</td>
                                <td>8</td>
                                <td>5 dias</td>
                            </tr>
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
