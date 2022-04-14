import categoriesJson from '../assets/json/categories/index.get.json';
import offersJson from '../assets/json/banners/index.get.json';
import productsJson from '../assets/json/products/index.get.json';



export const getCategoriesData = () => {
  return categoriesJson;
};


export const getOffersData = () => {
  return offersJson;
};


export const getProductsData = () => {
  return productsJson;
};


export const setNewUserData = (newData) => {
  if (localStorage.setItem("SC-USERS", JSON.stringify(newData))) {
    return true
  }
  return false;
};


export const getUserData = () => {
  let data = localStorage.getItem('SC-USERS');
  data = data ? JSON.parse(data) : []
  return data;
};