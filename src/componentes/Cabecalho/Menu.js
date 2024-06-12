import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const textoOpcoes = ["Home", "Produto", "Cadastrar Produto"];

const MenuConteiner = styled.ul`
     width: 40%;
    display: flex;    
    color: white;
    li{
        list-style: none;
        font-size: 30px;
        font-weight: bold;
        margin: 0 15px;
    }
`
function Menu() {
    return (
        <MenuConteiner>
            {
                textoOpcoes.map( (opcao) => (
                    <Link
                     to={`/${opcao.replace(/\s+/g,'').toLowerCase()}`}
                    style={{
                        color:"white",
                        textDecoration:'none'

                    }}



                    >
                        <li>{opcao}</li>

                    </Link>
                )) 
            }
        </MenuConteiner>
    );
}
export default Menu;