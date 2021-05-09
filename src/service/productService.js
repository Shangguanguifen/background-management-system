import CommonUtil from 'util/common';

let _commonUtil = new CommonUtil();

class Product{
  // 获取商品信息列表
  getProductList(listParam) {
    let url = '',
      data = {};
    data.pageNum = listParam.pageNum;
    if(listParam.listType === 'list') {
      url = '/manage/product/list.do';
    } else if(listParam.listType === 'search') {
      url = '/manage/product/search.do';
      data[listParam.searchType] = listParam.searchKeyword
    }
    return _commonUtil.request({
      type: 'post',
      url: url,
      data: data
    })
  }

  // 获取商品详情
  getProduct(productId) {
    return _commonUtil.request({
      type: 'post',
      url: '/manage/product/detail.do',
      data: {
        productId: productId || 0
      }
    })
  }

  // 变更商品销售状态
  setProductStatus(productInfo) {
    return _commonUtil.request({
      type: 'post',
      url: '/manage/product/set_sale_status.do',
      data: productInfo
    })
  }

  // 获取品类列表
  getCategoryList(categoryId) {
    return _commonUtil.request({
      type: 'post',
      url: '/manage/category/get_category.do',
      data: {
        categoryId: categoryId || 0
      }
    })
  }

  // 新增商品
  addProduct(product) {
    return _commonUtil.request({
      type: 'post',
      url: '/manage/product/save.do',
      data: product
    })
  }
  // 修改品类名称
  updateCategoryName(category) {
    return _commonUtil.request({
      type: 'post',
      url: '/manage/category/set_category_name.do',
      data: category
    })
  }

  // 新增商品品类
  addCategory(category){
    return _commonUtil.request({
      type    : 'post',
      url     : '/manage/category/add_category.do',
      data    : category
  });
}

}
export default Product;