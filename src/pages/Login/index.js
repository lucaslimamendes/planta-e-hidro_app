import '../Login/styles.css';
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../../context';
import SideBar from '../../components/SideBar';
import { API } from "../../utils/http-common";

const Login = () => {
    const navigate = useNavigate();
    const { dispatchEvent } = useContext(AppContext);

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState();

    const loginHandle = async () => {
        setError();
        try {
            const resp = await API.post('/login', {
                email: email,
                password: pass,
            });
            if(resp.status != 200){
                setError(resp.data.error);
                return;
            }
            await dispatchEvent('SET_LOGGED', { logged: true });
            await dispatchEvent('SET_USER', { user: await resp.data });
            localStorage.setItem('token', await resp.data.token);
            navigate('/');
        } catch (error) {
            setError('Não foi possivel fazer login, tente novamente!');
            console.log('error.message', error.message);
        }
    }

    return (
        <div className="content-Login">
            <SideBar />
            <div className="content-conteudoLogin">
                <div className="content-user">
                    { error && <p>{error}</p> }
                    <div className="usuario">
                        <p>E-mail</p>
                        <input value={email} onInput={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="senha">
                        <p>Senha</p>
                        <input value={pass} onInput={e => setPass(e.target.value)} type="password"/>
                    </div>
                    <div className="acesso">
                        <a onClick={() => loginHandle()}>Acessar</a>
                    </div>
                    <div className="register">
                        <a onClick={() => navigate('/register')} >Cadastrar-se</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
