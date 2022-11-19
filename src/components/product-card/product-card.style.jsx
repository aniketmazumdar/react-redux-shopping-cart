import styled from 'styled-components';

export const CardContainer = styled.div`
    margin-bottom: 50px;
    border-bottom-style: dashed;
    border-color: #999;
    padding-bottom: 20px;
`;

export const ProductTitle = styled.h6`
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
`;


export const CardImage = styled.img`
    width: 100%;

    /* For Desktop View */
    @media screen and (min-width: 1024px) {
        height: 200px;
    }
    
    /* For Tablet View */
    @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
        height: 150px;
    }
    
    /* For Mobile Portrait View */
    @media screen and (max-device-width: 480px) and (orientation: portrait) {
        height: 150px;
    }
`

export const CardContentWrapper = styled.div`
    background-color: #EEE;
    font-size: 14px;
    padding: 10px;
    margin-top: 10px;
`

export const CardButtonContainer = styled.div`
    margin-top: 10px;
`