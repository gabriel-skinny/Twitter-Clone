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
                <small>Politica . há 10 minuto</small>
                <p>
                    Bolsonaro é declarado maior jogador de 
                    free fire do planeta. Ele jogou free fire
                    durante 40, intesensas, horsa seguidas muito
                    legal banca maneira.
                </p>
                <small>24k Tweets</small>
              </li>

              <li>
                <small>Covid-19 . há 1 minuto</small>
                <p>
                    Covid-19 é um doencã muito legal
                    que ta matando velihnos por ai
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