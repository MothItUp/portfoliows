import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #007bff;
        --secondary-color: #6c757d;
        --red-color: #FF5C68;
        --green-color: #D7DF23;
        --white-color: #FFFAFF;
        --background-dark-color: #1E1B18;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-second-dark-color: #151515;
        --topbar-dark-color: #218380;
    }
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    body{
        background-color: var(--background-dark-color);
    }
`;

export default GlobalStyle;