import React, { useEffect, useState, useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowsLeftRight,
//   faBath,
//   faBed,
//   faUserGroup,
// } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import SlideShow from "../../components/slideShow/SlideShow";
import SlideImages from "../../components/slideImages/SlideImages";
import MapBox from "../../components/map/MapBox";
import * as spaceServices from "../../services/spaces";
import * as sharingServices from "../../services/sharing";
import MethodContext from "../../context/methodProvider";
// import FormReview from "../../components/review/FormReview";
// import ItemSharing from "../../components/share/ItemSharing";
// import ListSharing from "../../components/share/ListSharing";
// import TitlePart from "../../components/titlePart/TitlePart";
// import Rating from "../../components/review/Rating";
import * as feedbackService from "../../services/review";
import * as medicineService from "../../services/medicine";
import icons from "../../ultils/icons";
import Medicine from "../../components/medicine/Medicine";

const { HiOutlinePlus, HiOutlineHeart, HiOutlineMinus } = icons;

const SpaceDetail = () => {
  const { spaceId } = useParams();
  const [spaceDetail, setSpaceDetail] = useState({});
  const [isOpenFormReview, setIsOpenFormReview] = useState(false);
  const [isOpenShares, setIsOpenShares] = useState(false);
  const { notify, filteredKeyNull } = useContext(MethodContext);
  const [averageRate, setAverageRate] = useState(0);
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [quantity, setQuantity] = useState(1);
  const defaultImages = [
    { imageId: 1,
      imageUrl:  'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P02439_1.png?versionId=J9O7KlIuEoMJbAOcuVNQIrT3jnFHwDN_'
    },
    { imageId: 2,
      imageUrl:  'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/1000x1000/P02439_1.png?versionId=J9O7KlIuEoMJbAOcuVNQIrT3jnFHwDN_'
    },
    { imageId: 3,
      imageUrl:  'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P02439_1.jpg'
    },
    { imageId: 4,
      imageUrl:  'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/500x500/P02439_5.jpg'
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const formatNumber = (number) => {
    if (typeof number === "number" && !isNaN(number)) {
      const formattedString = number.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return formattedString.replace(/\.00$/, "");
    }
  };

  useEffect(() => {
    if (spaceId) {
      const fetchMedicine = async () => {
        const spaceParam = {
          medicineId: spaceId
        };
        const medicine = await medicineService.getMedicine(spaceParam);
        if (medicine?.status === 200) {
          const spaceDetail = medicine?.data?.medicine;
          console.log(spaceDetail);
          setSpaceDetail(spaceDetail);
        } else notify("Không tìm thấy sản phẩm nào!");
      };
      fetchMedicine();
    }
  }, []);

  // useEffect(() => {
  //   const fetchFeedback = async () => {
  //     const paramsFiltered = filteredKeyNull({
  //       ownerId: spaceDetail?.ownerId?.id,
  //     });
  //     // call API to get feedback
  //     const responseFeedback =
  //       await feedbackService.getListFeedback(paramsFiltered);
  //     if (responseFeedback?.status === 200) {
  //       setAverageRate(responseFeedback?.data?.averageRate);
  //       const listFeedback = responseFeedback?.data?.listFeedbacks;
  //       setFeedbacks(listFeedback);
  //     } else setFeedbacks([]);
  //   };
  //   // call list feedback
  //   fetchFeedback();
  // }, []);

  const handleLinkBooking = () => {
    console.log(spaceDetail?.id);
    const accessToken = localStorage.getItem("access-token");
    if (accessToken && accessToken !== null) {
      navigate("/booking", {
        state: {
          spaceId: spaceDetail?.medicine_id,
          quantity: quantity,
        },
      });
    } else {
      notify("Yêu cầu đăng nhập!", "error");
    }
  };

  const handleAddCart = () => {
    console.log(spaceDetail?.id);
    const accessToken = localStorage.getItem("access-token");
    if (accessToken && accessToken !== "null") {
      // Chuyển sang trang giỏ hàng
    } else {
      notify("Yêu cầu đăng nhập!", "error");
    }
  };

  const handleDecreaseQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  return (
    <>
      <div className="mx-auto my-10 grid max-w-[1200px]  grid-cols-12 gap-5 px-10">
        <div className=" col-span-12 md:col-span-4">
          {/* images of space*/}
          <SlideImages images={spaceDetail?.images || defaultImages} />
        </div>
        <div className=" col-span-12 md:col-span-4">
          {/* Nội dung của sản phẩm*/}
          <h6 className="text-xl font-bold text-black my-4">Tên sản phẩm: {spaceDetail?.name}</h6>
          <p className="text-sm text-primaryColor  my-4">Thương hiệu: {spaceDetail?.brandName}</p>
          <p className="text-2xl font-bold text-primaryColor  my-4">Giá bán: {formatNumber(spaceDetail?.price)} đ</p>
          <p  className="my-4">Giá đã bao gồm thuế. Phí vận chuyển và các chi phí khác (nếu có) sẽ được thể hiện khi đặt hàng.</p>
          <div className="flex items-center my-4">
            <HiOutlineHeart className="mr-1 cursor-pointer" />
            <span>{spaceDetail?.sold}</span>
            <span className="mx-4">|</span>
            <span>{spaceDetail?.like}</span>
          </div>
          <div className="border-b-2 border-black mb-4 my-4" />
          <p className="font-bold my-4">Danh mục:</p>
          <p>{spaceDetail?.categoryName}</p>
          <p className="font-bold my-4">Công dụng:</p>
          <p>{spaceDetail?.uses}</p>
          <p className="font-bold my-4">Nhà sản xuất:</p>
          <p>{spaceDetail?.producerName}</p>
          <p className="font-bold my-4">Quy cách:</p>
          <p>{spaceDetail?.spec}</p>
          <p className="font-bold my-4">Lưu ý:</p>
          <p>Mọi thông tin trên đây chỉ mang tính chất tham khảo. Đọc kỹ hướng dẫn sử dụng trước khi dùng</p>
        </div>
        {/* Thanh toán */}
        <div className=" col-span-12 md:col-span-4">
          <div className="rounded-lg border-[0.5px] border-[#B2B2B2]">
            <div className="rounded-t-lg bg-[#f4f4f4] p-4">
              <h4 className="text-xm font-bold text-textBoldColor">
                Tổng Tiền
              </h4>
            </div>
            <div className="pb-4">
              <ul className="mx-5 mb-4 mt-5 border-b-[0.5px] border-[#B2B2B2] pb-4">
                <li className="flex justify-between">
                  <p>{formatNumber(spaceDetail?.price)}đ</p>
                </li>
              </ul>
              <div className="ml-5">
              <h3>Số lượng</h3>
              <div className="py-4 flex w-full items-center">
                <button 
                  onClick={handleDecreaseQuantity} 
                  className={`text-primaryColor font-bold text-lg p-2 border rounded ${quantity === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                  disabled={quantity === 1}
                >
                  <HiOutlineMinus />
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                  className="mx-2 pl-2 py-1 w-12 text-center border border-gray-300 rounded-md"
                />
                <button 
                  onClick={handleIncreaseQuantity} 
                  className="text-primaryColor font-bold text-lg p-2 border rounded"
                >
                  <HiOutlinePlus />
                </button>
              </div>
            </div>
              <div className="flex justify-between px-5 ">
                <p className="font-semibold text-primaryColor">Total</p>
                <p className="font-semibold text-primaryColor">
                  {formatNumber(spaceDetail?.price * quantity)}đ
                </p>
              </div>
              <div className="mx-5 mt-5 text-center">
                <p
                  onClick={handleLinkBooking}
                  className="block w-full rounded-xl border-2 border-primaryColor px-8 py-2 font-semibold transition-all hover:cursor-pointer hover:bg-primaryColor hover:text-white hover:shadow hover:shadow-primaryColor"
                >
                  Mua ngay
                </p>
              </div>
              <div className="mx-5 mt-5 text-center">
                <p
                  onClick={handleAddCart}
                  className="block w-full rounded-xl border-2 bg-primaryColor px-8 py-2 font-semibold text-white transition-all hover:cursor-pointer hover:bg-white hover:text-black hover:shadow hover:shadow-primaryColor"
                >
                  Thêm vào giỏ hàng
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <h2 className="mb-2 text-xl font-bold text-primaryColor">
            {spaceDetail?.description}
          </h2>
          <h2 className="text-xl font-bold text-textBoldColor">
            {spaceDetail?.categoryName}
          </h2>

          <div className="mb-4">
            <p className="text-xm mb-3 font-bold text-primaryColor">Thành phần</p>
            <p>{spaceDetail?.spec}</p>
            <div className="mb-3 flex flex-wrap text-textBoldColor">
            </div>
            <div className="mb-4">
              <p className="text-xm mb-3 font-bold text-primaryColor">
                Hướng dẫn sử dụng
              </p>
              <p>{spaceDetail?.uses}</p>
              <div className="flex w-full text-textBoldColor">
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xm mb-3 font-bold text-primaryColor">
                Xuất sứ thương hiệu
              </p>
              <p>{spaceDetail?.brandName}</p>
              <div className="flex w-full text-textBoldColor">
              </div>
            </div>
            {/* describe */}
            <div className="mb-4">
              <p className="text-xm mb-3 font-bold text-primaryColor">Mô Tả</p>
              <div className="flex text-textBoldColor">
                <p className=""></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*slide show*/}
      {/* ! Làm lại đề xuất sản phẩm ở chỗ này */}
      <Medicine titlePart="Các sản phẩm liên quan khác cùng danh mục" idCategoryDetail={spaceDetail?.categoryDetail_id} medicine_id={spaceDetail?.medicine_id}/>
    </>
  );
};

export default SpaceDetail;
