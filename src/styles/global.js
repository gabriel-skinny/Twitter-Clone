import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    } 

    body,input, a{
        background: ${props => props.theme.colors.primary };
        font-family: 'Ubuntu', sans-serif;
        color: ${props => props.theme.colors.text};
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }

    button{
        cursor: pointer;
        color: #fff;

    }
`