import styled from 'styled-components';

export const Container = styled.div`
    border-bottom: 1px solid ${props => props.theme.colors.border};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    main{
    display: flex;
    padding: 10px;

    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
        
        }

    div{
        display: flex;
        flex-direction: column;
        margin-left: 5px;

        ul{
            display: flex;
            margin-bottom: 10px;
        
            h4{
                margin-right: 5px;
            }

            small{
                color: ${props => props.theme.colors.secText};
                font-size: 14px;
            }

            time{
                margin-left: 10px;
                color: ${props => props.theme.colors.secText};
                font-size: 16px;
            }
        }

        p{
            font-size: 16px;
            width: 500px;
        }

       img.post-image{
           margin-top: 10px;
           width: 500px;
           height: 300px;
           border-radius: 5px;
           border: 1px solid ${props => props.theme.colors.border};
           
       } 
    }
  }

  nav{
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
      margin-bottom: 5px;

      svg:nth-child(2){
          transform: rotate(270deg)
      }
  } 
`;
