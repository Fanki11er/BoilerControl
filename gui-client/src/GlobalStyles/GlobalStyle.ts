import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`

html{
    box-sizing: border-box;
    
   
}

*,*::after, *::before{
    box-sizing: inherit;
}

body {
    //font-family: Montserrat, sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: ${theme.colors.lightGray} ;
    
   
    //::-webkit-scrollbar {
    //display: none;
//}
}


`;
