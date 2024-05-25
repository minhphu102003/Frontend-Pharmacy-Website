import * as request from '../ultils/request'
import {getHasBody} from "../ultils/request";

const GET_LIST_MEDICINE_ENDPOINT = "/api/medicine/list-medicine";
const GET_MEDICINE_ENDPOINT = "api/medicine/medicine";

export const getListMedicines = async (paramsObject) => {
    try {
        return await request.get(GET_LIST_MEDICINE_ENDPOINT, {
            params: paramsObject
        });
    } catch (error) {
        return error
    }
};

export const getMedicine = async (paramsObject) =>{
    try{
        return await request.get(GET_MEDICINE_ENDPOINT,{params:paramsObject})
    }catch(err){    
        return err;
    }
}