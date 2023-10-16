import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    
  }

  body {
    font: 14px 'Lato', sans-serif;
    background-color: #FFFEF5;
    color: #301141;
    -webkit-font-smoothing: antialiased !important;
    margin: 0 auto;
    border: solid #F2CAE1 1em;
  }

  ul {
    list-style: none;
  }

  input::placeholder{
color:#725284;
  }
input{
  border: 1px solid #725284;
  border-radius: 2px;
  margin-right: 5px;
  padding: 2px;
}
`;
