import './styles.css'
import React, { Component } from 'react'
import SideBar from '../../components/SideBar'

const Consultancy = () => {
  
  return (
    <div className="content-consultancy">
        <SideBar />
      <div class="container">
        <div class="bubble">
          {/* <div class="imageDiv">
            <img src='../public/consultor.jpeg' alt="Girl in a jacket" width="125" height="125" class="image"> </img>
          </div> */}
          <div class="name">
            <h3><p>Nome: Hortêncio Figo</p></h3>
          </div>
          <div class="formation">
            <h3><p>Formação: Eng. Agrônoma</p></h3>
          </div>
          <div class="specialty">
            <h3><p>Especialização: Hortaliças</p></h3>
          </div>
        </div>
      </div>
      <div class="chat-popup" id="myForm">
        <form  class="form-container">
          <h3>Converse com Hortêncio Figo</h3>
          <label for="msg"><b>Mensagem</b></label>
          <textarea placeholder="Escreva sua menssagem..." name="msg"></textarea>
          <button type="submit" class="btn">Enviar</button>
          <button type="button" class="btn cancel" >Fechar</button>
        </form>
      </div>
    </div>

  );
};

export default Consultancy;
