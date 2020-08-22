import styled from "styled-components";

export const TitleText = styled.div`
    font-size: 3em;
    font-weight: bold;
`

export const IntroText = styled.span`
    p {
        font-size: ${({ theme }) => theme.font.size.xxl};
        hyphens: auto;
        text-align: justify;

        @media (max-width: 480px) {
            font-size: ${({ theme }) => theme.font.size.md};
        }

        @media (max-width: 768px) {
            font-size: ${({ theme }) => theme.font.size.lg};
        }
    }
`