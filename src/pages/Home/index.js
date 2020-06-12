import React, { useContext } from 'react';

import { Container, Main, Tweet } from './styles';

import { ThemeContext} from "styled-components"

import Switch from "react-switch"

import Menu from "../../components/Menu"
import Feed from "../../components/Feed"
import Search from "../../components/Search"

function Home({ toggleTheme }) {
    const { title } = useContext(ThemeContext)
  
    return (
      <Container>
            <Menu />
            
            <Switch 
               onChange={toggleTheme}
               checked={title === "light"}
               checkedIcon={false}
               uncheckedIcon={false}
               offColor="#000"
               onColor="#ccc"
            />

            <Main>
                <h1>Home</h1>

                <Tweet>
                    <div>
                        <img src="http://g1.globo.com/Noticias/Musica/foto/0,,35508178-EX,00.jpg" alt=""/>
                        <input placeholder="What’s happening?" type="text"/>
                    </div>
                    <button>Tweet</button>
                </Tweet>
            
                <Feed />
            </Main>

            <Search />
      </Container>
  );
}

export default Home;