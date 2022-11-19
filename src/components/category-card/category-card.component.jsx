import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import { CardContainer, CardImgWrapper, CardImage, CardContentWrapper, CardButtonContainer } from './category-card.style';
import Button from '../../components/button/button.component';


export default function CategoryCard({catData=null, index=0}) {
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate('shop/' + catData.key);

    return (
        <CardContainer>
            <Row className={(index%2 == 1 && 'reverse-content')}>
                <Col xs={4} md={4} lg={4}>
                    <CardImgWrapper>
                        <CardImage src={require('../../' + catData.imageUrl)} />
                    </CardImgWrapper>
                </Col>

                <Col xs={8} md={8} lg={8} className='ContentWrap' style={{'justify-content': index%2 == 1 ? 'flex-start' : 'flex-end'}}>
                    <CardContentWrapper>
                        <h3>{catData.name}</h3>
                        <h5>{catData.description}</h5>

                        <CardButtonContainer>
                            <Button type='button' btnType='small' onClick={onNavigateHandler}>Explore {catData.name}</Button>
                        </CardButtonContainer>
                    </CardContentWrapper>
                </Col>
            </Row>
        </CardContainer>
    )
}
