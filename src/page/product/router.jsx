/*
 * @Author: Guifen Shangguan 
 * @Date: 2021-04-07 15:22:38 
 * @Last Modified by: Guifen Shangguan
 * @Last Modified time: 2021-04-12 21:35:34
 */
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import ProductList from 'page/product/productList';
import Category from 'page/product/category';
import ProductSave from 'page/product/productList/save';
import CategoryAdd from 'page/product/category/add.jsx';
import ProductDetail    from 'page/product/productList/detail';


function ProductRouter() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/product/productList" component={ProductList} />
          <Route path="/product-category/categoryList/:categoryId?" component={Category} />
          <Route path="/product/save/:id?" component={ProductSave} />
          <Route path="/product/detail/:pid" component={ProductDetail}/>
          <Route path="/product-category/add" component={CategoryAdd}/>
          <Redirect exact from="/product" to="/product/productList" />
          <Redirect exact from="/product-category" to="/product-category/categoryList" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default ProductRouter;
