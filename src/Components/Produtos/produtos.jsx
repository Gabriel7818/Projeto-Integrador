import React from 'react';
import './responsividade.css';
import './produtos.css';
import Imagem1 from "../../Components/Produtos/img/produtos.png";
import Imagem2 from "../../Components/Produtos/img/produtos.png";
import Imagem3 from "../../Components/Produtos/img/produtos.png";
import Imagem4 from "../../Components/Produtos/img/produtos.png";


const Produtos = () => {
    return (
        <section className="cor-fundo">
          <div>
            <h1 class="titulo-sofas">Produtos</h1>
          </div>
          <div class="sofa-retratil">
            <h1>Poltronas</h1>
          </div>
          <section class="flex">
            <figure>
              <img src={Imagem1} alt="Todas poltronas" />
              <figcaption>
                DESCRIÇÃO1
              </figcaption>
            </figure>
            <figure>
              <img src={Imagem1} alt="Todas poltronas" />
              <figcaption>
                DESCRIÇÃO2
              </figcaption>
            </figure>
            <figure>
              <img src={Imagem1} alt="Todas poltronas" />
              <figcaption>
                DESCRIÇÃO3
              </figcaption>
            </figure>
            <figure>
              <img src={Imagem1} alt="Todas poltronas" />
              <figcaption>
                DESCRIÇÃO4
              </figcaption>
            </figure>
            </section>
            <div class="sofa-2-3">
              <h1>Cabeceiras</h1>
            </div>
            <section class="flex">
              <figure>
                <img src={Imagem2} alt="As cabeceiras" />
                <figcaption>
                  DESCRIÇÃO5
                </figcaption>
              </figure>
              <figure>
                <img src={Imagem2} alt="As cabeceiras" />
                <figcaption>
                  DESCRIÇÃO6
                </figcaption>
              </figure>
              <figure>
                <img src={Imagem2} alt="As cabeceiras" />
                <figcaption>
                  DESCRIÇÃO7
                </figcaption>
              </figure>
              <figure>
                <img src={Imagem2} alt="As cabeceiras" />
                <figcaption>
                  DESCRIÇÃO8
                </figcaption>
              </figure>
              </section>
              <div class="sofa-canto-alemao">
                <h1>Puffs</h1>
              </div>
              <section class="flex">
                <figure>
                  <img src={Imagem3} alt="Todos puffs" />
                  <figcaption>
                    DESCRIÇÃO9
                  </figcaption>
                </figure>
                <figure>
                  <img src={Imagem3} alt="Todos puffso" />
                  <figcaption>
                    DESCRIÇÃO10
                  </figcaption>
                </figure>
                <figure>
                  <img src={Imagem3} alt="Todos puffso" />
                  <figcaption>
                    DESCRIÇÃO11
                  </figcaption>
                </figure>
                <figure>
                  <img src={Imagem3} alt="Todos puffso" />
                  <figcaption>
                    DESCRIÇÃO12
                  </figcaption>
                </figure>
                </section>
        </section>
      );
    };
    
    export default Produtos;
