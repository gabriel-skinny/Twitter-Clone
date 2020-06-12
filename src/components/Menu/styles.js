import styled from 'styled-components';
import { darken } from "polished"

export const Container = styled.div`
    width: 15%;
    height: 700px;
    margin-top: 10px;
    position: fixed;
    display: flex;
    flex-direction: column;

    ul{
        
        
        display: flex;
        flex-direction: column;
        justify-content: center; 
        
        a{
            margin-top: 30px;
            display: flex;
            align-items: center;

            &:hover{
                color: #00acee;

            }
        
            h2{
                font-size: 20px; 
               margin-left: 20px;
            }
        }
    
        button{
            width: 200px;
            margin-top: 60px;
            margin-right: 20px;
            font-weight: bold;
            background: #00acee;
            padding: 15px 8px;
            border: 0;
            border-radius: 25px;
            transition: background 0.2s;

            &:hover{
                background: ${darken(0.08 ,"#00acee")}
            }
            
        }
    }
`;
