import * as request from '../ultils/request'


const CATEGORIES_ENDPOINT = "/api/category/categories"

export const getCategories = async () => {
    try {
        return await request.get(CATEGORIES_ENDPOINT);
    } catch (error) {
        return error
    }
};

const CATEGORIE_ENDPOINT = "/api/category/categorie"

export const getCategoryById = async(paramsObject) =>{
    try{
        return await request.get(CATEGORIE_ENDPOINT, {params:paramsObject})
    }catch(err){
        return err;
    }
}