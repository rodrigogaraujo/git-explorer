import styled, { css } from "styled-components";

export const Container = styled.header<{withLikes?: boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({withLikes}) => withLikes && css`
        width: 720px;
    `}
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

