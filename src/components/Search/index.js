import React from 'react';

import { Container } from './styles';

function Search() {
  return (
      <Container>
          <input type="text" placeholder="Search on Twiter"/>

          <ul>
              <li>
                 <h1>O que está acontecendo</h1>
              </li>
              
              <li>
                <small>Tecnologia . há 10 minuto</small>
                <p>
                    Node foi completamente morto e substituido pelo 
                    Deno.
                </p>
                <small>24k Tweets</small>
              </li>

              <li>
                <small>Celebridades . há 1 minuto</small>
                <p>
                    Michel Telo responde a pergunta:
                    "Nós nunca vimos você e o felipe deschapms 
                    no mesmo lugar. Vocês seriam a mesma pessoas?"
                </p>
              </li>

              <li>
                <small>Entretenimento . há 20 minuto</small>
                <p>
                    PC Siqueira
                </p>
                <small>24k Tweets</small>
              </li>

              <li>
                <small>Entretenimento . há 1 hora</small>
                <p>
                    Caue Moura
                </p>
                <small>12k Tweets</small>
              </li>
          
              <a href="google.com">Mostrar mais</a>
          </ul>
      </Container>
  );
}

export default Search;