import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as medicineService from '../../services/medicine';
import TitlePart from "../titlePart/TitlePart";

const Medicine = ({titlePart, idCategoryDetail = 0, medicine_id = 0, limit = 18}) => {
  const navigate = useNavigate();
  const [medicines, setMedicines] = useState([]);
  const imgMedicine = 'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P00075.png';

  const fetchMedicine = async () => {
    try {
      const response = await medicineService.getListMedicines();
      if (response.status === 200) {
        setMedicines(response.data.listMedicine);
      } else {
        console.log(response);
      }
    } catch (err) {
      console.log("Error fetching medicines ", err);
    }
  };

  const fetchMedicineRecommend = async () => {
    try {
      if(limit === 18){
        const response = await medicineService.getListMedicines({categoryDetail_id: idCategoryDetail, medicine_id: medicine_id});
        if (response?.status === 200) {
          setMedicines(response?.data?.listMedicine);
        } else {
          console.log(response);
        }
      }
      else{
        const response = await medicineService.getListMedicines({categoryDetail_id: idCategoryDetail, medicine_id: medicine_id, limit: 0});
        if (response?.status === 200) {
          setMedicines(response?.data?.listMedicine);
        } else {
          console.log(response);
        }
      }
    } catch (err) {
      console.log("Error fetching medicines recommend ", err);
    }
  }

  useEffect(() => {
    if (idCategoryDetail === 0 && medicine_id === 0) {
      fetchMedicine();
    } else {
      fetchMedicineRecommend();
    }
  }, [idCategoryDetail]);

  const formatPrice = (price) => {
    return price.toLocaleString('en-US') + ' ₫';
  };

  return (
    <div className="w-[75vw] mx-auto my-8">
      <TitlePart title={titlePart} subTitle="Sản phẩm đề xuất" subDesc="" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-[15px]">
        {medicines.map((medicine) => (
          <div key={medicine.medicine_id} className="swiper-slide !h-auto">
            <div className="mr-3 md:mr-4 h-full relative transform transition duration-300 hover:scale-110">
              <Link to={`/spaces/${medicine.medicine_id}`} className="product-card">
                <div className="h-full overflow-hidden rounded-lg border bg-white pb-[1px] shadow-sm hover:border-primaryColor">
                  <div className="product-card-image">
                    <div>
                      <img
                        src={imgMedicine}
                        alt={medicine.medicineName}
                        loading="lazy"
                        width="500"
                        height="500"
                        className="max-h-[100%] max-w-[100%] object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-2 pb-1 font-medium">
                    <div data-state="closed">
                      <h3 className="line-clamp-2 h-10 text-sm font-semibold">{medicine.medicineName}</h3>
                    </div>
                    <div className="my-1 items-center whitespace-nowrap">
                      <del className="block h-5 text-sm font-semibold text-neutral-600"></del>
                      <span className="mt-[2px] block h-6 text-base font-bold text-primary-500">
                        {formatPrice(medicine.price)}
                      </span>
                      <div className="mb-2 flex items-center py-1 text-sm">
                        <span className="p-icon inline-flex align-[-0.125em] max-h-full max-w-full w-4 h-4 min-w-[16px] items-center justify-center text-neutral-700">
                          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.222 2.00002C16.3254 1.99786 15.4391 2.19001 14.6239 2.56323C13.8088 2.93646 13.0842 3.48191 12.5 4.16202C11.9158 3.48191 11.1912 2.93646 10.3761 2.56323C9.5609 2.19001 8.67453 1.99786 7.77799 2.00002C6.55113 1.99725 5.35047 2.35483 4.32502 3.02836C3.29957 3.7019 2.49448 4.66174 2.00968 5.78875C1.52488 6.91576 1.38171 8.16034 1.59793 9.36799C1.81416 10.5757 2.38027 11.6932 3.22599 12.582L11.779 21.471C11.8723 21.5681 11.9843 21.6454 12.1082 21.6981C12.2321 21.7509 12.3653 21.7781 12.5 21.7781C12.6347 21.7781 12.7679 21.7509 12.8918 21.6981C13.0157 21.6454 13.1277 21.5681 13.221 21.471L21.774 12.582L21.781 12.575C22.6248 11.6855 23.189 10.5679 23.4037 9.36078C23.6184 8.15365 23.4741 6.91005 22.9887 5.78415C22.5033 4.65826 21.6982 3.69955 20.6731 3.02689C19.648 2.35423 18.4481 1.99719 17.222 2.00002Z" fill="currentColor"></path>
                          </svg>
                        </span>
                        <span className="text-[14px] leading-[20px] mx-1 font-medium">{medicine.likeMedicine} likes</span>
                        <span className="text-neutral-600">|</span>
                        <span className="text-[14px] leading-[20px] mx-1 font-medium">Sold {medicine.soldMedicine}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medicine;
