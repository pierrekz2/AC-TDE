import React from 'react';
import logo from '../../assets/logo.png'
import './styles.css'

export default function Home() {
    return (
        <div className="container">
            <img src={logo} alt="logo" />

            <div className="content">
                <h1>Seja bem vindo ao <br/> Amigo Chocolate</h1>


            </div>
        </div>
    )
}