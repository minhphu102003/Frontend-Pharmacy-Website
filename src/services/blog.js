import * as request from '../ultils/request';

const GET_LISTBLOG_ENDPOINT = '/api/blog/list-blog';

export const getListBlog = async (paramsObject)=>{
    try{
        return await request.get(GET_LISTBLOG_ENDPOINT,{params: paramsObject});
    }catch(err){
        return err;
    }
}

const GET_LIST_CATEGORY_BLOG = '/api/categoryBlog/list-categories';

export const getListCategory = async (paramsObject)=>{
    try{
        return await request.get(GET_LIST_CATEGORY_BLOG,{params: paramsObject});
    }catch(err){
        return err;
    }
}