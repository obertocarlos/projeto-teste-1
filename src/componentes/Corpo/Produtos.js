import React from "react";
import styled from "styled-components";
import {produtos} from "../../produtosCadastrados";
import CardProduto from "./CardProduto";
import { useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'Ben10', year: 2010 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
]
    
const ProdutosContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20%;
    width: 80%;
    margin: 20px;
    gap: 20px;
`
const CardProdutosContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: center;
`
const Pesquisa = styled.div`
    display: flex;
    flex-direction: column;
`
    function Teste (){
        alert("voce apertou o botão")

    }

function Produtos(){
    const [produtoFiltrados, setProdutoDigitado] = useState(produtos);

    

    return(
        <ProdutosContainer>
            <Pesquisa>
            <h2>Pesquise seu produto aqui</h2>
            <input 
                placeholder="Digite o produto" 
                onChange={evento => {
                    const produtoDigitado = evento.target.value;
                    const resultadoFiltro = produtos.filter(
                        produto => produto.nome.includes(produtoDigitado)
                    )

                    setProdutoDigitado(resultadoFiltro)
                    }
                }
            />
            
            </Pesquisa>
        
            <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    <Button 
    variant="contained" 
    color="info"
    onClick={Teste}
     >Contained
     </Button>

                <CardProdutosContainer>
                    {produtoFiltrados.map( produto =>(
                        <CardProduto
                            nomeProduto={produto.nome}
                            precoProduto={produto.preco}
                            descricaoProduto={produto.descricao}
                            imgProduto={produto.img}
                            corNomeProduto={"white"}
                        />
                    
                    ))
                    }
                </CardProdutosContainer>
        </ProdutosContainer>

    );

}
export default Produtos;