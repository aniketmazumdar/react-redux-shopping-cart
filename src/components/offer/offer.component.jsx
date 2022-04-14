import React, {useState, useEffect} from 'react'
import { Carousel } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';

import Loader from '../loader/loader.component';
import {CardContainer,} from './offer.style';
import {selectOffers, selectIsLoading} from '../../redux/selector/offer.selector';
import { fetchOffersStartAsync } from '../../redux/action/offer.action';


export default function Offer() {
    const dispatch = useDispatch();
    const offerList = useSelector(selectOffers);
    const isLoading = useSelector(selectIsLoading);

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  

    useEffect(() => {
        dispatch(fetchOffersStartAsync());
    }, []);

    return (
        <>
        {
            isLoading ?
            <Loader />
            :
            offerList.length !== 0 &&
            <CardContainer>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    offerList.map((item, indx) => (
                        <Carousel.Item key={item.id}>
                            <img
                                className="d-block w-100"
                                src={require('../../' + item.bannerImageUrl)}
                                alt={item.bannerImageAlt}
                            />
                        </Carousel.Item>
                    )) 
                }
                </Carousel>
            </CardContainer>
        }
        </>
    );
}
