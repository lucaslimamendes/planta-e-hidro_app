import '../Login/styles.css'
import React from 'react'
import SideBar from '../../components/SideBar'

const Login = () => {

    return (
        <div className="content-Login">
           
            <div className="content-conteudoLogin">
                <div className="content-user">
                    <div className="usuario">
                        <p>Usuário</p>
                        <input></input>
                    </div>
                    <div className="senha">
                        <p>Senha</p>
                        <input></input>
                    </div>
                    <div className="acesso">Acessar</div>
                    <div className="esqueci-senha">Esqueci minha senha</div>
                </div>
                
            </div>
        </div>
    );
};

export default Login;
