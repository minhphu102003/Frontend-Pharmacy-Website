import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MethodContext from "../../context/methodProvider";
import TitlePart from "../../components/titlePart/TitlePart";
import SlideShow from "../../components/slideShow/SlideShow";
import Medicine from "../../components/medicine/Medicine";
import ChatIcon from "../../components/boxChat/ChatIcon";
import ChatBox from "../../components/boxChat/ChatBox";
import * as categoriesService from "../../services/Category";
import SidebarFilter from "../../components/sidebarFilter/SidebarFilter";

const ListMedicine = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { notify } = useContext(MethodContext);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [category, setCategory] = useState(null);
  const [idCategoryDetail, setIdCategoryDetail] = useState(null);

  const areaValue = [
    {
      id: 1,
      areaFrom: 0,
      areaTo: "100.000",
    },
    {
      id: 2,
      areaFrom: "100.000",
      areaTo: "300.000",
    },
    {
      id: 3,
      areaFrom: "300.000",
      areaTo: "500.000",
    },
    {
      id: 4,
      areaFrom: "500.000",
      areaTo: "1.000.000",
    },
  ];

  const handleSetArea = (e) => {
    const selectedAreaId = Number(e.target.value);
    const selectedArea = areaValue.find((item) => item.id === selectedAreaId);
    // setState((prevState) => ({
    //     ...prevState,
    //     areaFrom: selectedArea.areaFrom,
    //     areaTo: selectedArea.areaTo
    // }))
  };

  useEffect(() => {
    if (location.state?.toastMessage) {
      notify(location.state?.toastMessage, "success");
      navigate(location.pathname, { replace: true, state: {} });
    }
    if (location.state?.idCategory) {
      setIdCategoryDetail(location.state.idCategory);
      // Call API to fetch medicines by category ID
      // fetchMedicinesByCategory(location.state.idCategory);
    }
  }, [location, navigate, notify]);

  const fetchCategory = async (categoryId) => {
    const response = await categoriesService.getCategoryById({
      categoryId: categoryId,
    });
    if (response?.status === 200) {
      const categoryData = response?.data?.category;
      setCategory(categoryData);
    } else {
      console.log(response);
    }
  };

  const handleChatOpen = () => {
    setIsChatOpen(true);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };
  const stringTitle = `Danh mục chi tiết của ${category?.name}`;
  return (
    <div className="">
      <SlideShow
        typeSlide="category detail"
        titlePart={stringTitle}
        background={true}
        idCategoryDetail={idCategoryDetail}
      />
      <div className="flex w-full m-auto flex-wrap justify-between">
      <div className="w-[250px] rounded-lg border-[0.5px] h-[300px] border-[#B2B2B2] my-4 ml-[120px]">
          <div className="rounded-t-lg bg-[#f4f4f4] p-4">
            <h4 className="text-xm font-bold text-textBoldColor">Bộ lọc</h4>
          </div>
          <div className="border-b-[0.5px] border-[#B2B2B2] pb-4">
            <p className="text-xm p-4 font-semibold text-textBoldColor">
              Khoảng giá:
            </p>
            <div className="grid grid-cols-1 gap-3 pl-4">
              {areaValue.map((area) => (
                <div key={area.id}>
                  <input
                    id="20"
                    className="text-xl hover:cursor-pointer"
                    type="radio"
                    value={area.id}
                    onClick={(e) => handleSetArea(e)}
                    name="area"
                  />
                  <label className="pl-2" htmlFor="">
                    {area.areaFrom} đ - {area.areaTo} đ
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="pb-4 h-[120px]">
                    <p className="p-4 text-textBoldColor text-xm font-semibold">Giá:</p>
                    <MultiRangeSlider min={100000} max={12000000} onRangeChange={handleRangeChange} />
                </div> */}
        </div>
        <div className="w-[1000px]">
          {/* <TitlePart
            title="Danh Mục"
            subTitle="Đa dạng danh mục"
            subDesc="Về tất cả các loại thuốc : Mọi thứ điều có ở pharmacy"
          /> */}

          <Medicine
            titlePart="Các sản phẩm thuốc nỗi trội"
            limit={0}
            idCategoryDetail={idCategoryDetail}
          />
        </div>

      </div>

      {!isChatOpen && <ChatIcon onClick={handleChatOpen} />}
      {isChatOpen && <ChatBox onClose={handleChatClose} />}
    </div>
  );
};

export default ListMedicine;
