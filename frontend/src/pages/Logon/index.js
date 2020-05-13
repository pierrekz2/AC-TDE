import React from 'react';
import './styles.css'
import {FiLogIn} from 'react-icons/fi'
import logo from '../../assets/logo.png'

export default function Logon() {
    return (
        <div className="container">
            <img src={logo} alt="logo" />

            <div className="content">
                <h1>Faça o login, <br/> para realização do sorteio.</h1>

                <form action="">
                    <label htmlFor="email">E-mail *</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu e-mail:" />
                    
                    <label htmlFor="password">Senha *</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Digite sua senha:" />

                    <button className="btn" type="submit">Entrar</button>
                </form>
                    <a href="/register">
                        <FiLogIn size={16} color="#fff"/>
                    Não tenho cadastro!
                    </a>
            </div>
        </div>
    )
}