import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { HomeContainer } from './home.style';
import { selectCategories,selectIsLoading } from '../../redux/selector/category.selector';
import { fetchCategoriesStartAsync } from '../../redux/action/category.action';
import CategoryCard from '../../components/category-card/category-card.component';
import Offer from '../../components/offer/offer.component';
import Loader from '../../components/loader/loader.component';

export default function Home() {

  const dispatch = useDispatch();
  const categoriesList = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);
  
  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);


  return (
    <HomeContainer>
      <Offer/>

      {
        isLoading ?
        <Loader />
        : (
          categoriesList.length ?
            categoriesList.map((item, indx) => (
              <CategoryCard key={item.key} catData={item} index={indx} />
            )) 
          :
            <h4>No category found!!!</h4>
        )
      }
    </HomeContainer>
  )
}
