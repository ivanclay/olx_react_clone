import styled from 'styled-components'

export const HeaderArea = styled.div`
    height: 60px;
    background-color: #FFF;
    border-bottom: 1px solid #CCC;
    .container{
        max-width: 1000px;
        margin: auto;
        display: flex;

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
        nav {
            padding-top: 10px;
            padding-bottom: 10px;

            ul, li {
                margin: 0;
                padding: 0;
                list-style: none;
            }

            ul {
                display: flex;
                align-items: center;
                height: 40px;
            }

            li{
                margin-left: 20px;
                margin-right: 20px;

                a, button {
                    border: 0;
                    background: none;
                    outline:0;
                    cursor: pointer;
                    color: #000;
                    font-size: 14px;
                    text-decoration: none;

                    &:hover {
                        color: #999;
                    }

                    &.button {
                        background-color: #FF8100;
                        border-radius: 20px;
                        padding: 8px 20px;
                        color: #FFF;
                        font-weight: bold;
                    }

                    &.button:hover {
                        background-color: #E57706;
                    }
                }
            }
        }
    }
`;