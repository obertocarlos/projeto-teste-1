import React from "react";
import styled from "styled-components";
import {produtos} from "../../produtosCadastrados";
import CardProduto from "./CardProduto";
import { useState } from "react";

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