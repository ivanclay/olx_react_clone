import styled from 'styled-components'

export const HeaderArea = styled.div`
    height: 60px;
    background-color: #FFF;
    border-bottom: 1px solid #CCC;
    .container{
        max-width: 1000px;
        margin: auto;
        display: flex;
    }

    a { text-decoration: none;}

    .logo {
        display: flex;
        flex: 1;
        align-items: center;

        .logo-1, .logo-2, .logo-3 {
            font-size: 27px;
            font-weight: bold;
        }

        .logo-1 {
            color: #FF0000;
        }

        .logo-2 {
            color: #00FF00;
        }

        .logo-3 {
            color: #0000FF;
        }
    }
    
`;