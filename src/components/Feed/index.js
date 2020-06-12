import React, { useContext } from 'react';

import { Container } from './styles';

import { ThemeContext } from "styled-components"

import { FiHeart, FiMessageCircle, FiShare, FiRepeat } from "react-icons/fi"

function Tweets() {
  const { colors } = useContext(ThemeContext)
  
  return (
      <>
        <Container>
            <main>
              <img src="https://blog.rocketseat.com.br/content/images/2019/05/profile.png" alt=""/>

              <div>
                <ul>
                  <h4>Diego Fernandes</h4>
                  <small>@diegofernandes</small>
                  <time>10m</time>
                </ul>

                <p>
                      Fala galerinha, rocketseat vai produzir muito
                      conteudo de graça esse ano ai. Pode anotar rapazeada.
                  </p>
              </div>

            </main>
            
            <nav>
              <FiMessageCircle color={colors.icons} size={20}/>
              <FiRepeat className="rotate" color={colors.icons} size={20} />
              <FiHeart color={colors.icons} size={20}/>
              <FiShare color={colors.icons} size={20}/>
            </nav>
            
        </Container>
        <Container>
        <main>
          <img src="data:image/jpeg;base64,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" alt=""/>

          <div>
            <ul>
              <h4>Felipe Deschamps</h4>
              <small>@felipedeschamps</small>
              <time>50m</time>
            </ul>

            <p>
                  Fala galerinha, fiz um video desenvolvendo um jogo do zero
                  em javascript, ficou bem massinha. Deixem o like la e comentem
                  nos comentarios o que voces acharam.
            </p>

            <img className="post-image" src="https://facilsaber.com.br/wp-content/uploads/2020/01/hqdefault-146.jpg" alt=""/>
          </div>

        </main>
        
        <nav>
              <FiMessageCircle color={colors.icons} size={20}/>
              <FiRepeat className="rotate" color={colors.icons} size={20} />
              <FiHeart color={colors.icons} size={20}/>
              <FiShare color={colors.icons} size={20}/>
            </nav>
        
    </Container>
    <Container>
            <main>
              <img src="data:image/jpeg;base64,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" alt=""/>

              <div>
                <ul>
                  <h4>Lucas Montano</h4>
                  <small>@lucasmontano</small>
                  <time>2h</time>
                </ul>

                <p>
                      Fala galera, aqui é o lucas montano do canal lucas montano 
                      e estamos aqui online na plataforma roxinha, programando e 
                      tomando um chimas.
                  </p>
              </div>

            </main>
            
            <nav>
              <FiMessageCircle color={colors.icons} size={20}/>
              <FiRepeat className="rotate" color={colors.icons} size={20} />
              <FiHeart color={colors.icons} size={20}/>
              <FiShare color={colors.icons} size={20}/>
            </nav>
            
        </Container>
        <Container>
            <main>
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMVFhUVGBUYGRUWGBcWFxgVFxcYFhcaGBcaHSggGBolGxUVITEhJSkrLi8uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS4tLSstLS0rLS0tLy0tNS0tLS0tLS0rLS0tLS0tLS0uLS0tLS8tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECAwQGBwj/xABCEAABAwIEBAMGAgcFCQEAAAABAAIRAyEEBRIxQVFhcQYigRMyQpGhsQfBI1Jy0eHw8TNigrLCFBc0Q1NUc5KTFf/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMFBAb/xAAwEQACAQIFAgMGBwEAAAAAAAAAAQIDEQQSITFBBVEigaETYXGRwdEjMkJSseHwFf/aAAwDAQACEQMRAD8A9IREXwp0giIgCIiAIiIAiIgCKjnACTYDiudr+LKWrTT814kzw3Mch1ha0qM6rtBENpHQ1KgaJJhYn4tgBM2HIE77LicV4hoe0drdVJmdbSGtb+767LJhs7cQXUsQTHwVGgiP/I0QRPr0XUp9Ljbxy+Rm6nY6o5xRDtJcQ4cCCFuNqtImRHNcvVNHGUpLXNe3dwuW73A+If3gZEcVG4rBO0uFKqKj22NOtLTEcY3EH1+itPpcP0tkKodzRrteAWmQQD6HYrIvNMN4rq0qg9s3QSACQ7W3aJ7WHRdpk+cNqidTXCw1NuJ7i0Lx18BOF3HVepdTTJdEReAuEREAREQBERAEREAREQBERAEREAREQBERAFgxmLZSaX1HaWjj15ADcrOSvJ/GXiUV62lpmmwgDlN5d1JiByHe/qwmGdeduFuVlKyNvxb4zD5Y0ltOOuo9Y4rkcFhalX33OawmCWyLdd+HA7R3WPL6Jque59IQ0tIkkTeZPy4b3XeZY+k2GlgBAIDeDeZPURM83dF9HTpxpRyxPO25as5HPcA/D6Q1p9jUDXT+q1xgCD6fNR+Cc9us02uOmfKyYcTtbe5+y9CbmDKzNJHvCGwAYZqbpPTytafmo/MfCsta+iRDry10OkWkTbcc+C0UuCLGnkeZ1qdNzzIjgPdE7GZsN+x3U/isQwsbWYyXU5NSkR5rHzezg2OztOx4QZUdlWXvp1mU3RNSQHuLgXOi7CDxMcQR3m2QZfUpVDLgymCAHBpcWTs17BHluYIkibWsoJK4inTrtNSjoeDNoPLi2AWE/KQonAY04R2pjIaSC5l+BANpE79OF1vVsoxVKp7WlqBEmWEaSOMEQREyW8r8FqYzM215FRoY+S10CIdN9Q2O+4+W6hom522U+KKLzALtJ90kXgGDImQukBleFMwx9ppa5jXkWuASB5rFxA4c+QXovgzNHlhbVDhFm6vec0eU25ggdwRHTlYvAJ3nT37GkZ8M7FFQGdlVcU1CIiAIiIAiIgCIiAIiIAiIgCIiAIiis8zpmHb+s87N/M8grQhKcssdyG7HP/iD4l9gw0qZEmziDe/w/Lf5LzrLMsNcFwIFiXGSAJ97VNhHX5KTzJxqvc55LnkT/EQYF/vbZTeR4KoGANaZN5OwO4j+f4fTYekqNNRW/JhLxMsyzIauljpFMRJqPhp0xuATaBJkjiIG5WbE1WFjsPhgC0jS+uZjT8TWA3JN/Tc3tndkbjOqo503OqTJ3AmbwfsFsU8tcwBoFjYifoRyW9yLEPSF4aCGtta7i0blxGx3t/J3amZuw9Njm+aNLdBizSO+/Xut7FYUuZDGgCRPEmNgOEKJdgnSOJ2A3gcJ+u6ryWsZs2rOe1tSmXNa7a3uncAcuFgZFtlJZbnDMRSjEACqPI6oLO28rtRs9pFodOypl+AqhsavLuRu0+h+6sxGUEhzSIa8cOBmQ4cuM9+asRYtZWfREU6gdoNm+46OLd9xYgm1o7auPZhcVTNWNMkNeWgSx8QDp5G3l4EOjirX5Q50XcXWBPODuevXoOS1quVVAXxYvA1GLOLZ80Xvcj+qXFjTwmUecMrGm+nFnum12z5mibtkiTxCuynGUDitNB7n0w46feaS0aSJB4yA2/6o9cbq9VhaeLdTXwLOa65mbbT0uYiSt3w57OrVqV2w2o2i5xa4EhjwNFOZsR7pA4ao7xuiD0TLsUHAXudVjwIJDh3BC3Vw2Q0qjC8FxLqWt8m8klrtzeHS5w7rtqNTU0HmFwcfQySzrZ/ybQZeiIueXCIiAIiIAiIgCIiAIiIAiIgC8+8R4wuxDy+1OkIaxt3F7ouY3d05R1XoK4jxNlwZiKZa4zVLpm8HygR9ey9/TXH2tn20KT2IbLMta6HF4e92m0RpAILbEWF5/Oy7vLcO3Q0Rb+bnqudwWFDdBAteTxJFj9fyXYYZnlbAX0MTBl9PCDkr3YQHgtmmz5rKAtEityGrYGbc9rXVjMmbMvk9yYU45qNCZUMzNBuFAsBZDgxyspBzQVjKmwuRFTAtmYva/ZWHBNEGBxt35LfrtusFYclRlrnP5hlDSCeqg8BgRTrNYf7Nzml+n49LjpaeJF9uZ6LsKlaGmeF1zLns9oWj3XkFp5OFx9o+So0iSaycSahcZf8ADGzme8AJ+EeUTy+kplbIZx3n6DZYm4cwag+OnRb11OcGPM84b8h89zDM0iL22nkSSPoQuf1KP4PmXg9TKiIuAbBERAEREAREQBERAEREAREQBQXi2mNFOp+pVZJ5NcY+p0hTqifFgH+x1yfhZr/+ZD/9K3w08taL95WWxydDEEiix27XEOHAkuBM+oJXd4R448l5f4YpmpVa74T5vmbf5SfVelZfLiV9RHcwexKMesjHwlPDrL7FbJMzMTqirTcrzR5qhYpBSpV5LA6r0WwKVkNMIDQctWo5Sr8OIuYWhiMMNpCo0yyZz+Y1SA4cYsuLxeJIdTImTVptcB/eIEgd/uu4xOCc4+pF1zmFy5rca2lUEBzm6SR7rwdYM9NNurliaPY76o7VoZMezqabRctBq37GG/NZ3P1Enn9uChMvqTWrzaSx7W8/aNpkkzxBEf4TzU0Fy+qVdIw8yaa5CIi4xsEREAREQBERAEREAREQBERAFHeIaWvDVWX8zS2xAPmtx5zHqpFUqAFpHItd6CT+S9WCpqpXin8fkVk7I858HUodUZEezgAchAAH3Xa5ZUN+AnhuetloY3L/AGdao4b1WUz6iWn8lfmGOqUvcYZjb+K+l2Zja6J2pi6gBLG9pt94lRNfNsS03c0DkdP0hcyMRj6ocXHSIcG6fe1fD5LQ2eJJWq7LsQSz2usM1DWT7Eu0DUXAQBc+UC4hW1fJFkuDusLnrjvfbj3n8lL0a0iZXk+Fo12VCWh/sSZYXESBqIIMOJmIIvG9hC9HyZ+qnclTGTvZiUVa6MuNzDRYR3UHjPEL499tOwklw37rVz9j3FzaZl3DooPC5EW1w+p7NzRbRqmpv8TnDyyIMNA33VbtssopI6jL8xDgCa7XE8dX2W9VOoWe2OW9vmuWpeDK5Z/xLhydLy7eZJc88DHLoseIyKrTqh1LEOi8tgD6gCR3k9VL0IWp0uCdc0n8SNJJm6v8QYEHE4Wo0e9UZJ5OZH3aR8lG4TCPLHanHV/PFdXhXB2HZWdcs/SmLklocHR3IVY66CWjOWwE0aoZWqFzvaVRIGommXHQP2Q0t3Ni4ro1z+Cqe1f7SC1+omDe0cbW2H0U9TNguR1SCtGfkax00LkRFxy4REQBERAEREAREQBERAEREAVtV8AnoR/PqPqrlRwkLWhU9nUU+xDV0ROaEHEtaDJn85/JST8M1wuFEvpNFdjx7zg7V/hiJ63U7hrr6yNmeeWhGnBkbNB7gKx2XPf72lo6LoBSWOtpaJJVsiIznO4rBMpMgXc7id1uZe+KYA5KLxuM9q8NYDExq7Kcw+WwwAqEtdCz0WpBvrRVn6KadhKVUBxaJIiYULnGALJc2eyzZJmd/ZvEHfuqrR2ZLV1dErSywCwcY7n96r/+c0cB9lvYdwI5rJVstMqM8zILFNDbBSOBJGBJbYhrx6ayT9CVF5udMkKUyts4J7ZN2VDOxu0m3WVRblpbIhssxDajnBoMS4auHSPophR2UtY5jXNBGjUIIuQQ2CTxiD81IrhdUq5pqC4+ptFchERcsuEREAREQBERAEREAREQBERAEREBFZi3TUa7o7/T+5SeWv37rRzhtg7lI+Yn/Sq4SrBtylfS9PqZqMb/AAMKiJyrWDRJNgoHEVvbS6Dp4deqw46o6pUbTdIZBcepEQD03+S26tMD3XL2t3KpWObfmDcN/aB0gkggEzJ6beq6jLPEtB9OdUEbgiD/AEWs/Dg7iduHJXUsBT3LPoCiutiZNPcjc/8AELSYp0n1GzBc0CAe5In0Wtl7XPqCoWOYAIE7kmOS6E0WCPLAHSAtXEg65JaKcTuJ1f0UNcslSS0RStVcw6qe/Fp2P7ipDB5myqP1XDdpsR+8dVC1c2oM3e35gq1jDUcx7bbxwMcQeiZrEWvuZM4xAkN4qYyXEA4Wo1ou1jhHEkh0fdc9mlMmvT7H8gpLKPKajRsSPpB+wKynUyKUuyZLV0kbuDo6GBvEATxvxWZEXys5ucnJ7s2CIiqSEREAREQBERAEREAREQBERAEREBhxlLUwgb8O4v8Aw9Vp4I6mgjcWPZSS0Ht9nUn4X/R3H57/ADXV6ZXUZOm+dviZzWlzYrUgYd0I+a4/xdh8RSOujUfp3LRfvC7ZjA8FvxD7jZaWKph4hwuLEdea7pkmQ+SZE7EUhVp4vVIadLhdoLi1033A+ylj4Xrta8trNlkwII1WkGQbKBxHhotc8sc+nraGudTcWktkGCReJEraoYDGgHTjqwBN7tdwgmXNJ2A4qySLeLhks7wlU8gdiB5veIbceUu8snzbLns2y/BUWtdWxD6znCsW02EaXPpuDdMt2M2MmJW27InVjOIxFaoBENNR2kHnoBidx6rDQ8LUW+5TaAPii9vsICNLsNeWQnhrIBXrOrPbDA6Ws2Agy0RyFl3VOoDVAAsGmeUrCSGMhojsthr20qc8Tx6qrZVkdiyDW1HZq2cpZu47kz89vWPuoqpWL3wOYJPrZdDhaeloHqe5uVy+o1ctPKuTWKMqIi4JoEREAREQBERAEREAREQBERAEREAREQBWV6Qc0tPH6K9ETad0QROGxpB0k+dhN+cWK2sU+YeONiFD5lQOpzwbhx9LmFbhswOzrcxy/gvrKc7xTfKMXE6HC1Ysf6LZLGbwtWkNTZab/dbVBsL0IzYa8cBZa2OdaNlIrTrUpP1PIKWiERtawE9CozHYwudpHCw7rNmuL1OIZwn6WUCytPlZcz5nfcBeeT4NYomMBHtGDgXD1PE/zwXR09h2C5nK2ltanO+oLpqew7Bcjqi0h5/Q0juXIiLklwiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIo/Os6oYRntK9QMF4G7nEcGt3cey8p8SeOa2YacNRaaFKo9rCdU1Hhx0w4izW3ktEzziy9eGwVSu9FZd/9uZzqKJ6fTc2o5+khzSbEEEctwo3MMCdxZw4/kVn8PYUUqbWNENYNIHRtgperRkdV9FCFoKPYzb1OfynOHUjpeLfbtK6bDZvSdcuF49Fz+JwAJ29FipZNSfuHDsTCmMpLQNJnV1c0pDciOpXPZz4mY0aWeYng259Y93ufksVTw7S46j0LnfvVj8upsEMaB2Cs5SISRBYnE1q0NMMHENn6nfibdVNZVgA1otstdtC/qp+hRhqpFFmzSZavSts4X9f6roA4HYgjouerWqMPIhRvjDB1svxP+24NzvZ1galXDEyxx/5jmD4HS7VbcyvLi8K660dmvqFKx2iKNyXOqWJY19N3vAGOKkl8/UpypyyyVmbJ32CIioSEREAREQBERAEREARFjxGIZTaX1HNY0bucQ0DuSiVyDIi4fOvxOwlKW0A7EO5t8lOf2yJI6tBXBZz+IWOryBU9iy/kojSYPOoZdPUEdl0KPTK9TVqy9/23M5VYo9qzDM6FATWq06Y4a3BpPYG59F5/wCJfxTa2WYJgedvbVAQwfsssXdzA7ryurULiXOJLju4klx7k3KoDC6tDpNKDvN5vRGMq7exs5rmVbE1PaV6jqj4iXRYbwALNHQLZ8OujE4fpUp/5h+9RIWahVLS1w3aQR3BkLqKKSsjG+tz6Iy5sSFKsChMjxba1NlVps9ocPUXHzU5TPFYRRszTxdC8hYmUAb7KSrslvVa2HcRYhS0EzHB2JlauLdAUmVHYppNgPU/zdQ0SmaeW4aTJUrUECFjwlENCuqOnsiVkG7sh8Y4BwPJYcXjH4h8vs1rQ1reAHE9yVs4qnKspUYlZtF0eRPxtTBYqoKRsHe7JAIsYt3hdfkv4ow/RXaSw7Pgam/tAEz3HyXA53W14iq7m93yBj7BR5WtShTqxtNXMFJp6H0Vl/iTD1nBoeGuddocY1jnTds8fskqXXzLTxb2sdTDjodBLNxIMgtB9108RBXX+HfxFxGHaGVR7VgO7j5g3vx+my5OI6RzSfk/ubRrdz2tFzuTeM8LiWyx8H4mn3m9SN46iQuhY8EAggg7EXBXHq0KlL86sbKSexVERZFgiIgCxYvFMpMNSo9rGNuXOIa0dyVxPiv8SKOHJp4YCtVEgun9Ew9xd5HIQOq8qzrO8Ri368RUL4JIbsxv7LBYd9+ZK6eG6XUq+KfhXr8jGdZLY9J8RfinTaCzBM9o7/q1AW0xvs2zn8OQ6rzPN84xGKfrr1XVDuATDW/stFm+i0lRd7D4OlQ/Ite/J5pTctwqKqL0lCiOQbJCkACyqxOCoLXQHpP4VeIA0nCVDEkmmTtO7m/mvV2WsvmSnULSHNJBBkEb2XtHgPxe3E0xTqECq2x69R0Wco8l4u+h24duFhaIKytvsrXNVCxa+oVraJWw8I1iEmBywvEzGyzPF+itAhQSab6ZUZ4lxvsMPUqf3SB3gqdcLryv8Ts7D3jDMNm3fHPgPz+SKN2G7I4Mum5VqFFuYlQqq1VCAyUarmOD2ktc0yHCxB6FdHlfjfFUCIIItI92epAtPouZRUlBSVmiU2tj2bw/+JWGrQyv+heTEu9w/wCLYeq7djwQCCCDcEXBBXzCVP8AhfxdiMCQGHXSm9FxOnrpPwHtI6FcrE9KhPxUtH24/o2jWa3PoFF51/vcw/8A2tb/ANqaLl/8zE/t9V9zb2se55SbjqsQWZm6xPEFfWnhEK1XFWhAVVEVW7IChVSFQBXFAUhUhXOCICgWfCYl9J7ajCQ5twQsEKsoD2Pwf4/pVgKdUhlTqfK7sfyXdMrtNwvmOFNZT4rxeHsyoXN/UfcenEehVHDsXUu59AioCVXVbdeTYP8AFFwH6Shfmx35Fbv+9WnH9g/5tVcrLXR6KVgfVjsvM8V+KTzanhwOrnT9APzXM5v4uxeIlrqmlp+Cn5R6nc/NMrGZHd+MfHLKTTSoOD6m0i7WdzxPT5ryipULiXOJJJJJO5JVqorpWKN3CqEVQFJBaqoUQFVRVVEBUhWhVCogCIigkzjh3WOtuURWKlpQIikFFU7BEUAqxCqopAegREBQKjkRQCgWR+yqiAsargiIC0qreKIgLCqoigkKrVVEILXKgREJLgqFERgKiIgCIiEn/9k=" alt=""/>

              <div>
                <ul>
                  <h4>Michel Telo</h4>
                  <small>@micheltelo</small>
                  <time>3m</time>
                </ul>

                <p>
                      Fala gelera de rocketseat, blz.
                  </p>
              </div>

            </main>
            
            <nav>
              <FiMessageCircle color={colors.icons} size={20}/>
              <FiRepeat className="rotate" color={colors.icons} size={20} />
              <FiHeart color={colors.icons} size={20}/>
              <FiShare color={colors.icons} size={20}/>
            </nav>
            
        </Container>
    </>
  );
}

export default Tweets;