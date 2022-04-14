import styled from 'styled-components';

const borderColor = '#000';

export const CardContainer = styled.div`
    border-color: ${borderColor};
    box-shadow: 0px 5px 5px #888888;
    margin: 50px 0px;
    padding: 30px 60px;

    .ContentWrap{
        display: flex;  
    }

    .reverse-content{
        display: flex;
        flex-direction: row-reverse;
    }
`;

export const CardImgWrapper = styled.div`
    padding: 10px;
`

export const CardImage = styled.img`
    width: 350px;
`

export const CardContentWrapper = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    
    h3 {
        font-weight: bold;
    }

    h5 {
        font-size: 17px;
        margin-top: 10px;
    }

    button {
        margin-top: 20px;
    }
`

export const CardButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
