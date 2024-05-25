import * as request from '../ultils/request';

const CATEGORY_BLOG_ENDPOINT = '/api/categoryBlog/list-cagegories';


// ! List category blog không cần để limit và unlimit
export const getListCategoriesBlog = async (paramsObject)=>{
    try{
        return await request.get(CATEGORY_BLOG_ENDPOINT,{params: paramsObject});
    }catch(err){
        return err;
    }
}