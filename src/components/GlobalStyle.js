import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
html{
        &::-webkit-scrollbar{
            width: 0.5rem;
            
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
}
body{
    /* background: #1b1b1b; */
  background: ${(props) => props.theme.lightTheme.clr__primary__lighter};

    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}

    h1{
        font-weight: lighter;
        font-size: 4rem;
    }
    h2{
        font-weight: lighter;
        font-size: 2.8rem;
    }
    h3{
        color: ${(props) => props.theme.lightTheme.clr__secondary};
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
       
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color: ${(props) => props.theme.lightTheme.clr__primary__secondary};

    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;