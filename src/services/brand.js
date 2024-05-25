import * as request from '../ultils/request';

const BRANDS_ENDPOINT = '/api/brand/list-brands';

export const getListBrand  = async(paramsObject)=>{
    try{
        return await request.get(BRANDS_ENDPOINT,{params: paramsObject});
    }catch(err){
        return err;
    }
}