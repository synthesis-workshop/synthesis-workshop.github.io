import styled from 'styled-components';

export const FullPageSection = styled.div`
    background-size: cover;
    background-position: center;
    background-image: ${({backgroundImage}) => {
        if(backgroundImage){
            return `url("${backgroundImage}")`
        } else {
            return "none"
        }
    }};
    background-color: ${({backgroundColor}) => backgroundColor || "none"};
    min-height: calc(100vh - ${({theme}) => theme.nav.height});
`