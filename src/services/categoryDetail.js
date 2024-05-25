import * as request from '../ultils/request';

const CATEGORY_DETAIL_ENDPOINT = '/api/categoryDetail/list-categoriesDetail';

export const getListCategoriesDetail = async(paramsObject) =>{
    try{
        return await request.get(CATEGORY_DETAIL_ENDPOINT,{params:paramsObject});
    }catch(err){
        return err;
    }
}