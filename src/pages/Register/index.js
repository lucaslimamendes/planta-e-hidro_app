import '../Register/styles.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SideBar from '../../components/SideBar';
import { API } from "../../utils/http-common";

const Login = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState();

    const registerHandle = async () => {
        setError();
        try {
            const resp = await API.post('/v1/users/', {
                name: name,
                phone: phone,
                email: email,
                password: pass,
            });
            if(resp.status != 201){
                setError(resp.data.error);
                return;
            }
            alert('Usuário criado com sucesso!');
            navigate('/login');
        } catch (error) {
            setError('Não foi possivel se cadastrar, tente novamente!');
            console.log('error.message', error.message);
        }
    }

    return (
        <div className="content-Login">
            <SideBar />
            <div className="content-conteudoLogin">
                <div className="content-user">
                    { error && <p>{error}</p> }
                    <div className="name">
                        <p>Nome</p>
                        <input value={name} onInput={e => setName(e.target.value)}/>
                    </div>
                    <div className="phone">
                        <p>Celular</p>
                        <input value={phone} onInput={e => setPhone(e.target.value)}/>
                    </div>
                    <div className="usuario">
                        <p>E-mail</p>
                        <input value={email} onInput={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="senha">
                        <p>Senha</p>
                        <input value={pass} onInput={e => setPass(e.target.value)} type="password"/>
                    </div>
                    <div className="register">
                        <a onClick={() => registerHandle()}>Cadastrar</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
