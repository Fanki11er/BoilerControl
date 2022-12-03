import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`



*,*::after, *::before{
    box-sizing: inherit;
}
html{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size:62.5% ;
    
   
}

body {
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-size:1.6rem ;
    width: 100vw ;
    min-height: 100vh ;
  
 
    
    ::-webkit-scrollbar{
        width: 20px;
        background-color: ${theme.colors.backgroundBlue};
    }

    ::-webkit-scrollbar-thumb{
        
        border-radius: 15px;
        border: 1px solid;
        background-color: ${theme.colors.green};
    }
    
   
    //::-webkit-scrollbar {
    //display: none;
//}
}


`;
