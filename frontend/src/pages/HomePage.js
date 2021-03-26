import categoriesApi from './../api/categoriesApi';
import productApi from './../api/productApi';
// import slidesApi from './../api/slidesApi';

import { currentURL, $, resetRender } from './../utils';
import { slide } from '../components/effect';
import Header from './../components/Header';

const HomePage = {
    async render() {    
    	const { data : { data : dataCategory } } = await categoriesApi.getAll();
    	console.log(dataCategory);
    	

        return /*html*/`
        	<h3>test ok</h3>
        `;
    },

   

}

export default HomePage;