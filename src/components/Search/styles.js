import styled from 'styled-components';
import { darken } from "polished"

export const Container = styled.div`
  position: relative;
  left: 350px;
  top: 10px;

  input{
      background: ${props => props.theme.colors.input};
      border: 0;
      border-radius: 20px;
      padding: 10px 20px;
      width: 330px;
      color: #627380;
  }
  
  ul{
      width: 330px;
      padding: 10px 0;
      background: ${props => props.theme.colors.secundary};
      border-radius: 15px;
      margin-top: 20px;
  
      li{
        border-bottom: 1px solid ${props => props.theme.colors.border};
        margin-bottom: 10px;
        padding: 0 0 10px;

        h1{
        font-size: 22px;
        margin-bottom: 10px;
        margin-left: 10px;
      }
      
        small{
            color: ${props => props.theme.colors.secText};
            margin-left: 10px;
            margin-bottom: 50px;
            
        }
      
        p{
            font-size: 15px;
            font-weight: bold;
            margin-top: 5px;
            margin-bottom: 10px;
            margin-left: 10px;
        }
      }
  
      a{
          margin: 20px;
          color: ${darken(0.05, '#00acee')};
          background: none;
      }
  }
`;
