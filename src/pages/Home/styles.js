import styled from 'styled-components';

export const Container = styled.div`
    width: 1200px;
    
    margin: 0 auto;
    
    display: flex;

    div.react-switch-bg, div.react-switch-handle{
        position: relative;
        left: 260px;
        margin-top: 10px !important;
    }

    
`;

export const Main = styled.main`
    width: 50%;
    border-right: 1px solid ${props => props.theme.colors.border};
    border-left: 1px solid ${props => props.theme.colors.border};
    position: relative;
    left: 290px;

    h1{
        font-size: 20px;
        height: 40px;
        margin-top: 15px;
        margin-left: 10px;
    }
`

export const Tweet = styled.div`
    border-top: 1px solid ${props => props.theme.colors.border};
    border-bottom: 1px solid ${props => props.theme.colors.border};
    border-left-width: 1px;
    display: flex;
    justify-content: space-between;
    height: 100px;

    div{
        display: flex;
        height: 80px;
        margin-top: 10px;
        margin-left: 10px;

        img{
        width: 50px;
        height: 50px;
        border-radius: 50%
        }

        input{
            border: 0;
            background: transparent;
            margin-left: 10px;
            color: ${props => props.theme.colors.placeholder};
            font-size: 18px;
            align-self: flex-start;
            margin-top: 15px;
        }
    }

    button{
        height: 40px;
        width: 90px;
        border: 0;
        border-radius: 15px;
        background: #00acee;
        align-self: flex-end;
        margin-bottom: 5px;
        margin-right: 5px;
    }

    
`
