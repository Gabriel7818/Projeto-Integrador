import React from "react";
import "./Sofa.css";
import "./Responsividade.css";
import Imagem1 from "../img/sofa-produtos.png";
import Imagem2 from "../img/sofa-produtos2.png";
import Imagem3 from "../img/sofa-produtos3.png";
import Imagem4 from "../img/sofa-produtos4.png";


const CorpoSofa = ({ CorpoSofa }) => {
  return (
    <section className="cor-fundo">
      <div>
        <h1 class="titulo-sofas">Sofás</h1>
      </div>
      <div class="sofa-retratil">
        <h1>Sofá Retrátil</h1>
      </div>
      <section class="flex">
        <figure>
          <img className="image-sofa" src={Imagem1} alt="Sofá Retrátil" />
          <figcaption>
            Retrátil Reclinável, 3 Lugares - Tecido de Veludo Azul (3.5M)
          </figcaption>
        </figure>
        <figure>
          <img className="image-sofa" src={Imagem1} alt="Sofá Retrátil" />
          <figcaption>
            Retrátil Reclinável, 3 Lugares - Tecido de Veludo Azul (3.5M)
          </figcaption>
        </figure>
        <figure>
          <img className="image-sofa" src={Imagem1} alt="Sofá Retrátil" />
          <figcaption>
            Retrátil Reclinável, 3 Lugares - Tecido de Veludo Azul (3.5M)
          </figcaption>
        </figure>
        <figure>
          <img className="image-sofa" src={Imagem1} alt="Sofá Retrátil" />
          <figcaption>
            Retrátil Reclinável, 3 Lugares - Tecido de Veludo Azul (3.5M)
          </figcaption>
        </figure>
        </section>
        <div class="sofa-2-3">
          <h1>Sofá 2-3 lugares</h1>
        </div>
        <section class="flex">
          <figure>
            <img className="image-sofa" src={Imagem2} alt="Sofá 2-3 Lugares" />
            <figcaption>
              2-3 Lugares, Peça com 3 (2M) ou 2 (1.5M) Lugares - Cinza
            </figcaption>
          </figure>
          <figure>
            <img className="image-sofa" src={Imagem2} alt="Sofá 2-3 Lugares" />
            <figcaption>
              2-3 Lugares, Peça com 3 (2M) ou 2 (1.5M) Lugares - Cinza
            </figcaption>
          </figure>
          <figure>
            <img className="image-sofa" src={Imagem2} alt="Sofá 2-3 Lugares" />
            <figcaption>
              2-3 Lugares, Peça com 3 (2M) ou 2 (1.5M) Lugares - Cinza
            </figcaption>
          </figure>
          <figure>
            <img className="image-sofa" src={Imagem2} alt="Sofá 2-3 Lugares" />
            <figcaption>
              2-3 Lugares, Peça com 3 (2M) ou 2 (1.5M) Lugares - Cinza
            </figcaption>
          </figure>
          </section>
          <div class="sofa-canto-alemao">
            <h1>Sofá Canto Alemão</h1>
          </div>
          <section class="flex">
            <figure>
              <img className="image-sofa" src={Imagem3} alt="Canto Alemão" />
              <figcaption>
                Canto Alemão, 2 Lugares - Tecido de Corvino Bege (1.5M)
              </figcaption>
            </figure>
            <figure>
              <img className="image-sofa" src={Imagem3} alt="Canto Alemão" />
              <figcaption>
                Canto Alemão, 2 Lugares - Tecido de Corvino Bege (1.5M)
              </figcaption>
            </figure>
            <figure>
              <img className="image-sofa" src={Imagem3} alt="Canto Alemão" />
              <figcaption>
                Canto Alemão, 2 Lugares - Tecido de Corvino Bege (1.5M)
              </figcaption>
            </figure>
            <figure>
              <img className="image-sofa" src={Imagem3} alt="Canto Alemão" />
              <figcaption>
                Canto Alemão, 2 Lugares - Tecido de Corvino Bege (1.5M)
              </figcaption>
            </figure>
            </section>
            <div class="sofa-chaise">
              <h1>Sofá Chaise</h1>
            </div>
            <section class="flex">
              <figure>
                <img className="image-sofa" src={Imagem4} alt="Sofá Chaise" />
                <figcaption>
                  Chaise, 3 Lugares - Tecido de Veludo Cinza (Chaise de 1.60M,
                  2.5M)
                </figcaption>
              </figure>
              <figure>
                <img className="image-sofa" src={Imagem4} alt="Sofá Chaise" />
                <figcaption>
                  Chaise, 3 Lugares - Tecido de Veludo Cinza (Chaise de 1.60M,
                  2.5M)
                </figcaption>
              </figure>
              <figure>
                <img className="image-sofa" src={Imagem4} alt="Sofá Chaise" />
                <figcaption>
                  Chaise, 3 Lugares - Tecido de Veludo Cinza (Chaise de 1.60M,
                  2.5M)
                </figcaption>
              </figure>
              <figure>
                <img className="image-sofa" src={Imagem4} alt="Sofá Chaise" />
                <figcaption>
                  Chaise, 3 Lugares - Tecido de Veludo Cinza (Chaise de 1.60M,
                  2.5M)
                </figcaption>
              </figure>
            </section>
    </section>
  );
};

export default CorpoSofa;