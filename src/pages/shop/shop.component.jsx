import React, {useEffect} from 'react'
import {useParams, Link} from "react-router-dom";
import { Row, Col, ListGroup  } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import {ShopContainer,ProductCardWrapper} from './shop.style';
import ProductCard from '../../components/product-card/product-card.component';
import Loader from '../../components/loader/loader.component';

import { selectCategories, selectIsLoading } from '../../redux/selector/category.selector';
import { fetchCategoriesStartAsync } from '../../redux/action/category.action';
import { selectProducts, selectIsProductLoading } from '../../redux/selector/product.selector';
import { fetchProductsStartAsync } from '../../redux/action/product.action';


export default function Shop() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const categoriesList = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);
  const productsList = useSelector(selectProducts);
  const isProdLoading = useSelector(selectIsProductLoading);


  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);


  useEffect(() => {
    if (categoriesList.length) {
      let selectedCatId = null;
      if (category) {
        let selectedCat = categoriesList.find(x => x.key === category);
        selectedCatId = selectedCat.id;
      }
      dispatch(fetchProductsStartAsync(selectedCatId));
    }
  }, [category, categoriesList]);
  

  return (
    <ShopContainer>
        <Row>
            <Col xs={0} sm={0} md={4} lg={3}>
              {
                isLoading ?
                <Loader />
                :
                (categoriesList.length ?
                  <ListGroup variant="flush">
                  {
                    categoriesList.map((item, indx) => (
                      <Link to={"/shop/" + item.key} key={item.key}>
                        <ListGroup.Item variant="secondary" className={item.key === category && 'active'}>{item.name}</ListGroup.Item>
                      </Link>
                    )) 
                  }
                  </ListGroup>
                :
                  <h4>No category found!!!</h4>
                )
              }
            </Col>

            <Col xs={12} sm={12} md={8} lg={9}>
                <ProductCardWrapper>
                  <Row>
                    {
                      isProdLoading ?
                        <Loader />
                      :
                        (productsList.length ?
                          productsList.map((item,indx) => {
                            return (
                              <Col xs={12} md={6} lg={3} key={item.id}>
                                <ProductCard prodInfo={item} />
                              </Col>
                            )
                          })
                        :
                        <h4>No product found!!!</h4>)
                    }
                  </Row>
                </ProductCardWrapper>
            </Col>
        </Row>
    </ShopContainer>
  )
}
