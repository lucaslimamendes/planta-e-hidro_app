import '../Stock/styles.css'
import React from 'react'
import SideBar from '../../components/SideBar'

const Stock = () => {

    return (
        <div className="content-Stock">
            <SideBar />
            <div className="content-conteudo">
                <h2>Estoque</h2>
                <div className="content-estoque">
                    <div className="content-imagem">
                        <img src="logo512.png"></img>
                    </div>
                    <div className="content-item">
                        <div className="descrição-item"><p>Descrição:</p></div>
                        <div className="qtd-item"><p>Qtd Item:</p></div>
                    </div>
                    <div className="content-datas">
                        <div className="dia-entrada"><p>Data Entrada:</p></div>
                        <div className="previsao-vencimento"><p>Data Vencimento:</p></div>
                    </div>          
                </div> 
                <div className="content-estoque">
                    <div className="content-imagem">
                        <img src="logo512.png"></img>
                    </div>
                    <div className="content-item">
                        <div className="descrição-item"><p>Descrição:</p></div>
                        <div className="qtd-item"><p>Qtd Item:</p></div>
                    </div>
                    <div className="content-datas">
                        <div className="dia-entrada"><p>Data Entrada:</p></div>
                        <div className="previsao-vencimento"><p>Data Vencimento:</p></div>
                    </div>          
                </div> <div className="content-estoque">
                    <div className="content-imagem">
                        <img src="logo512.png"></img>
                    </div>
                    <div className="content-item">
                        <div className="descrição-item"><p>Descrição:</p></div>
                        <div className="qtd-item"><p>Qtd Item:</p></div>
                    </div>
                    <div className="content-datas">
                        <div className="dia-entrada"><p>Data Entrada:</p></div>
                        <div className="previsao-vencimento"><p>Data Vencimento:</p></div>
                    </div>          
                </div> <div className="content-estoque">
                    <div className="content-imagem">
                        <img src="logo512.png"></img>
                    </div>
                    <div className="content-item">
                        <div className="descrição-item"><p>Descrição:</p></div>
                        <div className="qtd-item"><p>Qtd Item:</p></div>
                    </div>
                    <div className="content-datas">
                        <div className="dia-entrada"><p>Data Entrada:</p></div>
                        <div className="previsao-vencimento"><p>Data Vencimento:</p></div>
                    </div>          
                </div> 
                                     
            </div>
        </div>
    );
};

export default Stock;
