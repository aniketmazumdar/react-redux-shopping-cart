import styled from 'styled-components';

export const CardContainer = styled.div`
    border-style: solid;
    border-color: #DDD;
    position: absolute;
    z-index: 10;
    background: #FFF;
    top: 105px;
    right: 170px;
    width: auto;
    min-width: 500px;

    .LowestPriceWrapper div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #FFF;
        padding: 15px 0px;
        border-radius: 5px;
    }
`;

export const CartTitleWrapper = styled.div`
    padding: 15px;
    background: #000;
    color: #FFF;
    display: flex;
    align-items: center;

    .subtitle{
        font-size: 25px;
        font-weight: bold;
        margin-right: 10px;
    }

    .cartitemcount{
        font-size: 20px;
    }
`;

export const CardButtonWrapper = styled.div`
    border-top-style: solid;
    border-color: #DDD;
    padding: 10px;
    position: relative;
    text-align: center;
`;

export const CartItemWrapper = styled.div`
    background: #DDD;
    text-align: center;
    min-height: 500px;
    padding: 20px 0px;
`;

export const EmptyCartWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: inherit;
`

export const CardImage = styled.img`
    width: auto;
    height: auto;
`