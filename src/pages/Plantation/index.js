import './styles.css'
import React, { Component } from 'react'
import SideBar from '../../components/SideBar'

const Plantation = () => {

    return (
        <div className="content-plantation">
            <SideBar />
            <div className="content-container">
                <div className="content-bubble">
                    <div className="content-imageDiv">
                        {/* <img src="https://blog.belagro.com.br/content/uploads/2022/01/plantar-alface-750x422.jpg" alt="Alface" width="125" height="125" className="content-image"> </img> */}
                    </div>
                    <div className="content-plant">
                        <h3>
                            <p>Planta: Alface</p>
                        </h3>
                    </div>
                    <div className="content-plantedQuantity">
                        <h3>
                            <p>Quantidade plantada: 700</p>
                        </h3>
                    </div>
                    <div className="content-dayPlanted">
                        <h3>
                            <p>Dia plantado: 01/01/2022</p>
                        </h3>
                    </div>
                    <div className="content-estimatedHarvestDay">
                        <h3>
                            <p>Data prevista de colheita: 04/08/2022</p>
                        </h3>
                    </div>
                </div>
            </div>

            <div className="content-container2">
                <div className="content-bubble">
                    <div className="content-imageDiv">
                        {/* <img src="https://media.istockphoto.com/photos/selective-focus-on-ripe-red-tomatoes-on-the-branches-in-the-growing-picture-id1256312003?k=20&m=1256312003&s=612x612&w=0&h=uEjpVhfHvHXE8729jn4Oj0l-8Sa3HmTVbPVYdADqc1M=" alt="Tomate" width="125" height="125" class="content-image">  </img> */}
                    </div>
                    <div className="content-plant">
                        <h3>
                            <p>Planta: Tomate</p>
                        </h3>
                    </div>
                    <div className="content-plantedQuantity">
                        <h3>
                            <p>Quantidade plantada: 1000</p>
                        </h3>
                    </div>
                    <div className="content-dayPlanted">
                        <h3>
                            <p>Dia plantado: 01/06/2022</p>
                        </h3>
                    </div>
                    <div className="content-estimatedHarvestDay">
                        <h3>
                            <p>Data prevista de colheita: 31/12/2022</p>
                        </h3>
                    </div>
                </div>
            </div>

            <div className="content-container3">
                <div className="content-bubble">
                    <div className="content-imageDiv">
                        {/* <img src="https://revistacampoenegocios.com.br/wp-content/uploads/2019/07/Cr%C3%A9ditos-Shutterstock-3-1024x682.jpeg" alt="Pepino" width="125" height="125" class="content-image"> </img> */}
                    </div>
                    <div className="content-plant">
                        <h3>
                            <p>Planta: Pepino</p>
                        </h3>
                    </div>
                    <div className="content-plantedQuantity">
                        <h3>
                            <p>Quantidade plantada: 300</p>
                    </h3>
                    </div>
                    <div className="content-dayPlanted">
                        <h3>
                            <p>Dia plantado: 15/04/2022</p>
                        </h3>
                    </div>
                    <div className="content-estimatedHarvestDay">
                        <h3>
                            <p>Data prevista de colheita: 06/02/2023</p>
                        </h3>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Plantation;