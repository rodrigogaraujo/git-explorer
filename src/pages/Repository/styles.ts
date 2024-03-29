import styled from "styled-components";


export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            border-radius: 50%;
            height: 120px;
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 36px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #737380;
                margin-top: 4px;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
            & + li {
                margin-left: 80px;
            }

            strong {
                display: block;
                font-size: 36px;
                color: #3d3d4d;
            }
            span {
                display: block;
                font-size: 18px;
                color: #6c6c80;
            }
        }
    }
`;

export const Issues = styled.section`
    margin-top: 50px;

    a {
        background: #fff;
        border-radius: 5px;
        padding: 24px;
        width: 100%;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px);
        }

        div {
            margin: 0 16px;
            flex: 1;

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
                margin-right: 10px;
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbd6;
        }
    }
`;

export const ButtonLikeOrNot = styled.button`
    outline: none;
    background-color: none;
    border: none;
`;
