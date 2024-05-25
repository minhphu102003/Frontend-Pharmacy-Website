import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Feedback from "../feedback/Feedback";
import TitlePart from "../titlePart/TitlePart";
import * as brandService from '../../services/brand';
import * as categoryDetailService from '../../services/categoryDetail';
import * as categoryBlogService from '../../services/categoryBlog';

const SlideShow = ({ typeSlide = "space", id = null, titlePart, background = false, idCategoryDetail = 0, }) => {
    const [items, setItems] = useState([]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        cssEase: 'linear',
        touchThreshold: 100,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const fetchListBrands = async () => {
        const responseListBrands = await brandService.getListBrand();
        if (responseListBrands?.status === 200) {
            setItems(responseListBrands?.data?.listBrand);
        }
    };

    const fetchListCategoryDetail = async () => {
        if(idCategoryDetail === 0 ){
            const responseListCategoryDetail = await categoryDetailService.getListCategoriesDetail();
            if (responseListCategoryDetail?.status === 200) {
                setItems(responseListCategoryDetail?.data?.listCategoriesDetail);
            }
        }
        else{
            const responseListCategoryDetail = await categoryDetailService.getListCategoriesDetail({category_id: idCategoryDetail, limit: 0});
            if (responseListCategoryDetail?.status === 200) {
                setItems(responseListCategoryDetail?.data?.listCategoriesDetail);
            }
        }
    };

    const fetchListCategoryBlog = async () => {
        const responseCategoryBlog = await categoryBlogService.getListCategoriesBlog({ categoryId: id });
        if (responseCategoryBlog?.status === 200) {
            setItems(responseCategoryBlog?.data?.listCategoriesBlog);
        }
    };

    useEffect(() => {
        if (typeSlide === "brand") {
            fetchListBrands();
        } else if (typeSlide === "category detail") {
            fetchListCategoryDetail();
        } else {
            fetchListCategoryBlog();
        }
    }, [typeSlide,idCategoryDetail]);

    const imgBrand = 'https://prod-cdn.pharmacity.io/e-com/images/banners/20240430174518-0-Banner%203.png';
    const imgCategoryDetail = 'https://prod-cdn.pharmacity.io/e-com/images/ecommerce/300x300/20240223201915-0-P14479_1.png';
    const imgDefault = typeSlide === "brand" ? imgBrand : imgCategoryDetail;

    return (
        <div className={`${background ? "py-12 bg-[#F7F8F9]" : ""}`}>
            <TitlePart title={titlePart} subTitle="Sản phẩm đề xuất" subDesc="Các sản phẩm cùng thương hiệu" />
            <div className="max-w-[1200px] mx-auto my-5 px-10">
                <Slider {...settings}>
                    {items.map(item => (
                        <Feedback key={item?.id} items={item} imgDefault={imgDefault} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default SlideShow;
