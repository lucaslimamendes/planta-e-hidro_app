import './styles.css'
import React, { Component } from 'react'
import SideBar from '../../components/SideBar'

const Stock = () => {

    return (
      <div className="content-stock">
        <SideBar />
        <div class="container">
          <div class="bubble">
            <div class="imageDiv">
              {/* <img src="https://blog.belagro.com.br/content/uploads/2022/01/plantar-alface-750x422.jpg" alt="Girl in a jacket" width="125" height="125" class="image"> </img> */}
            </div>
            <div class="plant">
              <h3><p>Planta: Alface</p></h3>
            </div>
            <div class="quantity">
              <h3><p>Quantidade: 700</p></h3>
            </div>
            <div class="dayHarvested">
              <h3><p>Data da colheita: 01/01/2022</p></h3>
            </div>
            <div class="expirationDate">
              <h3><p>Data de vencimento: 04/08/2022</p></h3>
            </div>
          </div>
        </div>
  
        <div class="container2">
          <div class="bubble">
            <div class="imageDiv">
            {/* <img src="https://media.istockphoto.com/photos/selective-focus-on-ripe-red-tomatoes-on-the-branches-in-the-growing-picture-id1256312003?k=20&m=1256312003&s=612x612&w=0&h=uEjpVhfHvHXE8729jn4Oj0l-8Sa3HmTVbPVYdADqc1M=" alt="Girl in a jacket" width="125" height="125" class="image"> </img>  */}
            </div>
            <div class="plant">
              <h3><p>Planta: Tomate</p></h3>
            </div>
            <div class="quantity">
              <h3><p>Quantidade: 1000</p></h3>
            </div>
            <div class="dayHarvested">
              <h3><p>Data da colheita: 01/06/2022</p></h3>
            </div>
            <div class="expirationDate">
              <h3><p>Data de vencimento: 31/12/2022</p></h3>
            </div>
          </div>
        </div>
  
        <div class="container3">
          <div class="bubble">
            <div class="imageDiv">
              {/* <img src="https://revistacampoenegocios.com.br/wp-content/uploads/2019/07/Cr%C3%A9ditos-Shutterstock-3-1024x682.jpeg" alt="Girl in a jacket" width="125" height="125" class="image"> </img> */}
            </div>
            <div class="plant">
              <h3><p>Planta: Pepino</p></h3>
            </div>
            <div class="quantity">
              <h3><p>Quantidade: 300</p></h3>
            </div>
            <div class="dayHarvested">
              <h3><p>Data da colheita: 15/04/2022</p></h3>
            </div>
            <div class="expirationDate">
              <h3><p>Data de vencimento: 06/02/2023</p></h3>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Stock;

